const AuthorInfo = {
  data() {
    return {
      title: "Turismo",
      name: null,
      count: 0,
      locationSelection: -1,
      locations: [
        {name: "Cancún", img: "https://img.freepik.com/free-photo/pool_74190-1975.jpg?t=st=1648828499~exp=1648829099~hmac=100f5eea316a8920c7bf855babe28954438289cedac6b9df4e78d132142b6f3d&w=996"},
        {name: "Los Cabos", img: "https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-sand-with-coconut-palm-tree-blue-sky-white-cloud_74190-7479.jpg?t=st=1648828499~exp=1648829099~hmac=1456866c66371dd6e49fe353a7dbc3553ff9eb476adc7e133349076251318027&w=996"},
        {name: "Playa del Carmen", img: "https://img.freepik.com/free-photo/beautiful_1203-2633.jpg?t=st=1648828618~exp=1648829218~hmac=19b8018c09ab66bf64fd337c89d809d29f4a2f678c2602657f5e2e045cf1fb74&w=996"}],
      img: null
    };
  },
};

const app = Vue.createApp(AuthorInfo).mount("#app");
