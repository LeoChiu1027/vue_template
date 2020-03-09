const Menu = [
  {header: ''},
  {
    title: '首頁',
    group: 'apps',
    icon: 'mdi-file-upload-outline',
    name: 'home',
    href: '/home'
  },
  {
    title: '會員',
    group: 'apps',
    icon: 'mdi-cash-multiple',
    name: 'member',
    href: '/home/member'
  },
  {
    title: 'VIP',
    group: 'apps',
    icon: 'mdi-cash-multiple',
    name: 'member',
    href: '/home/vip'
  },  
  {divider: true},
  {header: 'Extras'},
  {
    title: '登出',
    group: 'extra',
    icon: 'list',
    href: '/logout'
  }
];

export default Menu;
