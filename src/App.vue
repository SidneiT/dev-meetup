<template>
  <v-app>
    <v-navigation-drawer fixed v-model="sideNav">
      <v-list>
        <v-list-tile v-for="(item, i) in menuItens" :key="i" route :to="item.to">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.native="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer;">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="(item, i) in menuItens" :key="i" :to="item.to">
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <routerView />
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItens: [
        { icon: "mdi-account-group", title: "View Meetups", to: "/meetups" },
        {
          icon: "mdi-map-marker",
          title: "Organize Meetup",
          to: "/meetup/new"
        },
        { icon: "mdi-account-settings", title: "Profile", to: "/profile" },
        { icon: "mdi-face", title: "Sign up", to: "/signup" },
        { icon: "mdi-lock", title: "Sign in", to: "/signin" }
      ]
    };
  }
};
</script>