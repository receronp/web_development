const AuthorInfo = {
  data() {
    return {
      title: "Hobbies",
      message: 'Hello Vue!',
      model: "Test Hobby",
      count: 0,
      hobbies: ["Basketball", "Music", "Running"],
      imag: "https://img.freepik.com/free-photo/mysterious-nature-african-american-young-basketball-player-red-team-action-neon-lights-dark-studio-background-concept-sport-movement-energy-dynamic-healthy-lifestyle_155003-34477.jpg?t=st=1647997812~exp=1647998412~hmac=6da71b3a277d4d438c24694b6bdda6056640b9cd4e8c96da90fa706614c47fbd&w=996",
    };
  },
};

const app = Vue.createApp(AuthorInfo).mount("#app");
