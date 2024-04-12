const { Reaction, User } = require('../models');

module.exports = {
  // Get all reactions
  
  async getSingleReaction(req, res) {
    try {
      const reaction = await Reaction.findOne({ _id: req.params.ReactionId })
        .populate('reaction');

      if (!reaction) {
        return res.status(404).json({ message: 'No reaction with that ID' });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Update a reaction
  async updateReaction(req, res) {
    try {
      const updatedReaction = await User.findOneAndReaction(
        { _id: req.params.ReactionId },
        { $set: req.body },
        { new: true }
      );
      
      res.json(updatedReaction);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  // Delete a reaction

  async deleteReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId });

      if (!reaction) {
        res.status(404).json({ message: 'No reaction with that ID' });
      }

      await Reaction.deleteMany({ _id: { $in: thoughts.reaction } });
      res.json({ message: 'reaction deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
