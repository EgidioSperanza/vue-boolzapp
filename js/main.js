new Vue({
  el: "#app",
  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "_2",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            text: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            text: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            text: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "sent",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "_3",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            text: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            text: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            text: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "_6",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            text: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            text: "Si, ma preferirei andare al cinema",
            status: "received",
          },
          {
            date: "10/01/2022 18:30:55",
            text:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id debitis consequuntur deleniti vitae rerum fugit itaque nesciunt, dolore amet! Facere accusamus repudiandae labore incidunt ducimus corrupti nemo, quisquam ipsum impedit!",
            status: "sent",
          },
        ],
      },
      {
        name: "Dario",
        avatar: "_4",
        visible: true,
        messages: [],
      },
      {
        name: "Michele",
        avatar: "_1",
        visible: true,
        messages: [],
      },
      {
        name: "Mario",
        avatar: "_7",
        visible: true,
        messages: [],
      },
      {
        name: "Giovanna",
        avatar: "_6",
        visible: true,
        messages: [],
      },
      {
        name: "Maria",
        avatar: "_io",
        visible: true,
        messages: [],
      },
      {
        name: "Federico",
        avatar: "_4",
        visible: true,
        messages: [],
      },
    ],
    userData: {
      name: "John Doe",
      avatar: "_8",
      visible: true,
      notifications: false,
      currentChat: 0,
    },
    newMessage: "",
    searchContacts: "",
    lastAccessTime: "",
    showDeleteModal: false,
    targetDelete: null,
  },
  methods: {
    getAvatarImgAddress: function (contact) {
      return `./img/avatar${contact.avatar}.jpg`;
    },
    notificationOpt: function () {
      this.userData.notifications = !this.userData.notifications;
    },
    lastAccess: function () {
      let contact = this.contacts[this.userData.currentChat];
      if (contact.messages.length > 0) {
        this.lastAccessTime = contact.messages[
          contact.messages.length - 1
        ].date.substr(11, 5);
        return `Ultimo accesso alle ${this.lastAccessTime}`;
      } else {
        return `Ultimo accesso Sconosciuto`;
      }
    },
    sendMessage: function () {
      this.contacts[this.userData.currentChat].messages.push({
        date: `${dayjs().format("DD/MM/YYYY HH:mm:ss")}`,
        text: this.newMessage,
        status: "sent",
      });
      this.newMessage = "";
      setTimeout(() => {
        this.contacts[this.userData.currentChat].messages.push({
          date: `${dayjs().format("DD/MM/YYYY HH:mm:ss")}`,
          text: "ok",
          status: "received",
        });
      }, 1000);
      this.lastAccess();
    },
    filterContacts(element) {
      if (
        element.name
          .toUpperCase()
          .startsWith(this.searchContacts.toUpperCase()) ||
        this.searchContacts === ""
      ) {
        return true;
      }
      return false;
    },
    deleteMessage: function (message, index, contact) {
      this.showDeleteModal = false;
      this.targetDelete = null;
      if (message.status === "sent" && this.showDeleteModal === false) {
        this.showDeleteModal = !this.showDeleteModal;
        this.targetDelete = `${this.contacts[
          contact
        ].name.toLowerCase()}_${index}`;
      }
      console.log(message.status);
      console.log(this.showDeleteModal);
      console.log(this.targetDelete);
    },
  },
});
