const AuthorInfo = {
  data() {
    return {
      title: 'Skills',
      skills: [
        "Teamwork",
        "Leadership",
        "Time management"
      ],
      imag: './src/img/Cisco1.jpg'
    }
  },
}

const app = Vue.createApp(AuthorInfo).mount('#author');
