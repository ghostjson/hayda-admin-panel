<template>
    <!-- Sidebar -->
    <div class="sidebar sidebar-style-2" data-background-color="red2">
        <div class="sidebar-wrapper scrollbar scrollbar-inner">
            <div class="sidebar-content">
                <div class="user">
                    <div class="avatar-sm float-left mr-2">
                        <img src="/assets/img/profile.jpg" alt="..." class="avatar-img rounded-circle">
                    </div>
                    <div class="info">
                        <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
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
                                    <a href="#profile">
                                        <span class="link-collapse">My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#edit">
                                        <span class="link-collapse">Edit Profile</span>
                                    </a>
                                </li>
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
                    <li class="nav-item"  v-bind:class="{ active: active('HomeContent.vue') }">
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
                    <li class="nav-item"  v-bind:class="{ active: active('Blog') }">
                        <router-link to="/blog" style="padding: 0">
                            <a data-toggle="collapse" href="#base">
                                <i class="fas fa-pen-nib"></i>
                                <p>Blog</p>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item"  v-bind:class="{ active: active('ContentEditor') }">
                        <router-link :to="{name: 'ContentEditor'}" style="padding: 0">
                            <a data-toggle="collapse" href="#base">
                                <i class="fas fa-pen-nib"></i>
                                <p>Content Editor</p>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item"  v-bind:class="{ active: active('PageEditor') }">
                        <router-link to="/pages" style="padding: 0">
                            <a data-toggle="collapse" href="#base">
                                <i class="fas fa-edit"></i>
                                <p>Page Editor</p>
                            </a>
                        </router-link>
                    </li>
                    <li class="nav-item"  v-bind:class="{ active: active('Subscriptions') }">
                        <router-link to="/subscriptions" style="padding: 0">
                            <a data-toggle="collapse" href="#base">
                                <i class="fas fa-money-check-alt"></i>
                                <p>Subscriptions</p>
                            </a>
                        </router-link>
                    </li>

                    <li class="nav-item"  v-bind:class="{ active: active('Settings') }">
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
        name: 'SideBarPartial',
        methods: {
            active(path) {
                return path === this.$route.name;
            },

        }
    }
</script>
