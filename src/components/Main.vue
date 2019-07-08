<template>
  <div id="app">
    <h2>Emails</h2>
    <v-form>
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <v-text-field :counter="10" label="First name" required v-model="first_name"></v-text-field>
          </v-flex>

          <v-flex xs12 md4>
            <v-text-field :counter="10" label="Last name" required v-model="second_name"></v-text-field>
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field v-model="newEmail" :rules="emailRules" label="E-mail" required></v-text-field>
            <v-btn color="success" @click="addEmail">Додати мейл</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <div v-for="(email, n) in allEmails" :key="email">
      <p>
        <span class="email">{{ email }}</span>
        <v-btn color="error" @click="removeEmail(n)">Удалить</v-btn>
      </p>
    </div>

    <v-container>
      <v-flex xs12 md4>
        <v-text-field :counter="50" label="Заголовок" required></v-text-field>
        <v-flex xs6>
          <v-textarea outline name="input-7-4" label="Введіть текст листа"></v-textarea>
          <v-btn color="success" @click="send">Розіслати</v-btn>
        </v-flex>
      </v-flex>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newEmail: null,
      emails: [],
      emailRules: [v => /.+@.+/.test(v) || "Введіть коректний E-mail "]
    };
  },
  computed: {
    allEmails() {
      return this.$store.getters.allEmails;
    }
  },
  created() {
    this.$store.dispatch("fetchEmails");
  },

  methods: {
    addEmail() {
      if (!this.newEmail) {
        return;
      }
      this.$store.dispatch("addEmail", this.newEmail);
    },
    removeEmail(x) {
      this.$store.dispatch("deleteEmail", x, 1);
    },
    send() {
      alert("Ваше повідомлення надіслано");
    }
  }
};
</script>

<style>
</style>
