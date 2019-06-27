const { version } = require('../../package');

module.exports = {
  prefix: '!',
  embed: {
    colors: {
      main: '87a8e0',
    },
    footer: `Hack Week | v${version}`
  },
  game: {
    channels: {
      category: 'games',
      text: {
        member: (member) => `${member.user.username.toLowerCase()}-${member.user.discriminator}`,
        author: (author) => `${author.username.toLowerCase()}-${author.discriminator}`
      }
    },
    blocks: {
      default: 'sky'
    },
    player: {
      maxHearts: 10
    }
  }
};