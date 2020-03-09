<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    fixed
    :dark="$vuetify.dark"
    app
    v-model="drawer"
    width="260"
  >
    <v-toolbar color="#8f8f5c" flat dark>
      <v-toolbar-title class="ml-0 pl-3">
      </v-toolbar-title>
    </v-toolbar>

    <v-list class="menuStyle">
      <template v-for="(item) in menus">
        <v-list-group v-if="item.items" :key="item.title" v-model="item.active" no-action>
          <template v-slot:activator>
            <v-list-item :to="item.href? item.href : null" class="gropStyle">
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>

          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            :to="subItem.href? subItem.href : null"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item v-else :to="item.href ? item.href : null" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  import menu from '@/api/menu';
  import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
 

  export default {
    name: 'app-drawer',
    components: {
      PerfectScrollbar,
    },
    props: {
      expanded: {
        type: Boolean,
        default: true
      },
    },
    data: () => ({
      mini: false,
      menus: menu,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }),
    computed: {
      drawer: {
        get() {
          return this.$store.state.drawer
        },
        set(val) {
          this.$store.commit('drawer', val)
        }
      },
      computeGroupActive() {
        return true;
      },
      sideToolbarColor() {
        return this.$vuetify.options.extra.sideNav;
      }
    },
    methods: {
      genChildTarget(item, subItem) {
        if (subItem.href) return;
        if (subItem.component) {
          return {
            name: subItem.component,
          };
        }
        return {name: `${item.group}/${(subItem.name)}`};
      }    
    }
  };
</script>


<style lang="stylus">
  #appDrawer
    overflow: hidden
    .drawer-menu--scroll
      height: calc(100vh - 48px)
      overflow: auto
</style>