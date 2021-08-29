<template>
  <!-- Sidebar -->
  <div class="sidebar sidebar-style-2" data-background-color="red2">
    <div class="sidebar-wrapper scrollbar scrollbar-inner">
      <div class="sidebar-content">
        <div class="user">
          <div class="avatar-sm float-left mr-2">
            <img
              src="https://ui-avatars.com/api/?name=Admin"
              alt="..."
              class="avatar-img rounded-circle"
            />
          </div>
          <div class="info">
            <a
              data-toggle="collapse"
              href="#collapseExample"
              aria-expanded="true"
            >
              <span>
                Admin
                <span class="user-level">Administrator</span>
                <span class="caret"></span>
              </span>
            </a>
            <div class="clearfix"></div>

            <div class="collapse in" id="collapseExample">
              <ul class="nav">
                <li>
                  <router-link to="/settings">
                    <span class="link-collapse">Settings</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul class="nav nav-primary">
          <li
            class="nav-item"
            v-bind:class="{ active: active('HomeContent.vue') }"
          >
            <router-link to="/" style="padding: 0">
              <a data-toggle="collapse" href="#dashboard">
                <i class="fas fa-tv"></i>
                <p>Dashboard</p>
              </a>
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: active('HealthHub') }">
            <router-link to="/health-hub" style="padding: 0">
              <a data-toggle="collapse" href="#">
                <i class="fas fa-file-medical-alt"></i>
                <p>Health Hub</p>
              </a>
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: active('Blog') }">
            <router-link to="/blog" style="padding: 0">
              <a data-toggle="collapse" href="#base">
                <i class="fas fa-pen-nib"></i>
                <p>Blog Bits</p>
              </a>
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: active('Games') }">
            <router-link to="/games" style="padding: 0">
              <a data-toggle="collapse" href="#base">
                <i class="fas fa-dice"></i>
                <p>Games</p>
              </a>
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: active('Podcasts') }">
            <router-link to="/podcasts" style="padding: 0">
              <a data-toggle="collapse" href="#base">
                <i class="fas fa-podcast"></i>
                <p>Podcasts</p>
              </a>
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: active('Users') }">
            <router-link to="/users" style="padding: 0">
              <a data-toggle="collapse" href="#base">
                <i class="fas fa-user-alt"></i>
                <p>Users</p>
              </a>
            </router-link>
          </li>
          <li
            class="nav-item"
            v-bind:class="{ active: active('ContentEditor') }"
          >
            <router-link :to="{ name: 'ContentEditor' }" style="padding: 0">
              <a data-toggle="collapse" href="#base">
                <i class="fas fa-heading"></i>
                <p>Content Editor</p>
              </a>
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: active('Email') }">
            <router-link to="/email/all" style="padding: 0">
              <a data-toggle="collapse" href="#base">
                <i class="fas fa-envelope"></i>
                <p>Email</p>
              </a>
            </router-link>
          </li>
          <li class="nav-item" v-bind:class="{ active: active('Chatbot') }">
            <router-link :to="{ name: 'Chatbot' }" style="padding: 0">
              <a data-toggle="collapse" href="#base">
                <i class="fas fa-comment-dots"></i>
                <p>Chatbot</p>
              </a>
            </router-link>
          </li>

          <!--                    <li class="nav-item"  v-bind:class="{ active: active('PageEditor') }">-->
          <!--                        <router-link to="/pages" style="padding: 0">-->
          <!--                            <a data-toggle="collapse" href="#base">-->
          <!--                                <i class="fas fa-edit"></i>-->
          <!--                                <p>Page Editor</p>-->
          <!--                            </a>-->
          <!--                        </router-link>-->
          <!--                    </li>-->
          <li
            class="nav-item"
            v-bind:class="{ active: active('Subscriptions') }"
          >
            <router-link to="/subscriptions" style="padding: 0">
              <a data-toggle="collapse" href="#base">
                <i class="fas fa-money-check-alt"></i>
                <p>Subscriptions</p>
              </a>
            </router-link>
          </li>

          <li class="nav-item" v-bind:class="{ active: active('Settings') }">
            <router-link to="/settings" style="padding: 0">
              <a data-toggle="collapse" href="#base">
                <i class="fas fa-cog"></i>
                <p>Settings</p>
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End Sidebar -->
</template>

<script>
export default {
  name: "SideBarPartial",
  methods: {
    active(path) {
      return path === this.$route.name;
    },
  },
};
</script>
