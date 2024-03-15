const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

// inside a command, event listener, etc.

const playlistEmbed = new EmbedBuilder()
  .setColor("#7B1FA2")
  .setTitle("Playlists")
  .setAuthor({
    name: "Haru Moon",
    iconURL: "https://i.imgur.com/6KsJ9aB.png?1"
  })
  .setDescription("Músicas do melhor player")
  .addFields(
    // { name: "\u200B", value: "\u200B" },
    {
      name: "Principal",
      value:
        "https://open.spotify.com/playlist/66lshgj6yMAVgPvlTuwT1K?si=1c0f018956194f52",
    },
    {
      name: "HardStyle",
      value:
        "https://open.spotify.com/playlist/4QXT8GMsShzuOlkX9oGrYy?si=4ea261f0c4124d68",
    },
    {
      name: "Rock",
      value:
        "https://open.spotify.com/playlist/6R40Ls4SRCbWPBbP3F021J?si=591e37968e5a44a1",
    }
  )
  .setImage('https://i.imgur.com/0uBwKBt.jpeg')

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("Links de playlist de Spotify"),

  async execute(interaction) {
    await interaction.reply({ embeds: [playlistEmbed] });
  },
};