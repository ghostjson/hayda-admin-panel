<template>
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">Send Email</div>
      <div class="card-body">
        <success-alert :message="success"></success-alert>
        <form @submit.prevent="sendEmail">
          <div class="form-group">
            <label for="to">To</label>
            <input type="text" v-model="to" id="to" class="form-control" />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              type="text"
              v-model="mail.subject"
              id="subject"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <textarea
              class="form-control"
              v-model="mail.content"
              id="content"
              rows="10"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../services/Api";
import SuccessAlert from "../components/widgets/SuccessAlert.vue";
export default {
  name: "Email",
  components: { SuccessAlert },
  data() {
    return {
      error: "",
      success: "",
      mail: {
        subject: "",
        content: "",
      },
      to: "all",
    };
  },
  methods: {
    sendEmail() {
      if (this.to === "all") {
        Api()
          .post("/notify/send-email/all", {
            subject: this.mail.subject,
            content: this.mail.content,
          })
          .then(() => {
            this.success = "Email was successfully sent.";
          });
      } else {
        Api()
          .post("/notify/send-email", {
            email: this.to,
            subject: this.mail.subject,
            content: this.mail.content,
          })
          .then(() => {
            this.success = "Email was successfully sent.";
          });
      }
    },
  },
  mounted() {
    this.to = this.$route.params["to"];
  },
};
</script>
