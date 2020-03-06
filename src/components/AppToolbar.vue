<template>
  <v-toolbar color="primary" fixed dark class="appToobarStyle">
    <v-toolbar-title class="ml-0 pl-3">
      <v-btn icon @click.stop="toggleDrawer()">
        <v-icon v-if="drawer">mdi-sort-variant</v-icon>
        <v-icon v-else>mdi-chevron-right</v-icon>
      </v-btn>
    </v-toolbar-title>
    <h3>ArmiTech</h3>

    <v-spacer></v-spacer>

    <v-menu bottom left>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <!-- {{member.name}} -->
          <v-avatar size="30px">
            <!-- <img :src="member.pic" alt="Michael Wang" /> -->
          </v-avatar>
        </v-btn>
      </template>

      <v-list class="pa-0">
        <v-list-item
          v-for="(item,index) in items"
          :to="!item.href ? { name: item.name } : null"
          :href="item.href"
          ripple="ripple"
          :disabled="item.disabled"
          :target="item.target"
          rel="noopener"
          :key="index"
        >
          <v-list-item-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>


<script>
import Util from "@/util";

export default {
  name: "app-toolbar",
  data: () => ({
    on: false,
    items: [
      {
        icon: "account_circle",
        href: "#",
        title: "Profile",
        click: e => {
          console.log(e);
        }
      },
      {
        icon: "settings",
        href: "#",
        title: "Settings",
        click: e => {
          console.log(e);
        }
      },
      {
        icon: "fullscreen_exit",
        title: "Logout",
        href: '/audit/login'
      }
    ]
  }),
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    },
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("drawer", val);
      }
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
    }
  }
};
</script>
<style scoped>
.appToobarStyle {
  width: 100%;
  position: fixed;
  z-index: 6;
}
</style>
