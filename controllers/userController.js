const { ObjectId } = require('mongoose').Types;
const { User, Course } = require('../models');

// Aggregate function to get the number of students overall
const headCount = async () => {
  const numberOfUsers = await User.aggregate()
    .count('studentCount');
  return numberOfUser;
}

module.exports = {
  // Get all users
  async getUser(req, res) {
    try {
      const users = await User.find();
      
      const userObj = {
        users,
        headCount: await headCount(),
      };
      
      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single User
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json({
        user,
        grade: await grade(req.params.userId),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new User
  async createUser(req, res) {
    try {
      const student = await User.create(req.body);
      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update a User
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { new: true }
      );
      
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await Student.findOneAndRemove({ _id: req.params.studentId });

      if (!user) {
        return res.status(404).json({ message: 'No such student exists' });
      }

      const course = await Course.findOneAndUpdate(
        { users: req.params.userId },
        { $pull: { users: req.params.userId } },
        { new: true }
      );

      if (!course) {
        return res.status(404).json({
          message: 'User deleted, but no courses found',
        });
      }

      res.json({ message: 'user successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
