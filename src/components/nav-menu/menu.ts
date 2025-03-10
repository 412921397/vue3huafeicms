export const userMenu = [
  // {
  //   id: 38,
  //   name: '系统总览',
  //   type: 1,
  //   url: '/main/user',
  //   icon: 'el-icon-monitor',
  //   sort: 1,
  //   children: [
  //     {
  //       id: 39,
  //       url: '/main/user',
  //       name: '用户管理',
  //       sort: 106,
  //       type: 2,
  //       children: null,
  //       parentId: 38
  //     },
  //     {
  //       id: 40,
  //       url: '/main/analysis/dashboard',
  //       name: '商品统计',
  //       sort: 107,
  //       type: 2,
  //       children: null,
  //       parentId: 38
  //     }
  //   ]
  // },
  // {
  //   id: 1,
  //   name: '系统管理',
  //   type: 1,
  //   url: '/main/system',
  //   icon: 'el-icon-setting',
  //   sort: 2,
  //   children: [
  //     {
  //       id: 2,
  //       url: '/main/system/user',
  //       name: '用户管理',
  //       sort: 100,
  //       type: 2,
  //       children: [
  //         {
  //           id: 5,
  //           url: null,
  //           name: '创建用户',
  //           sort: null,
  //           type: 3,
  //           parentId: 2,
  //           permission: 'system:users:create'
  //         },
  //         {
  //           id: 6,
  //           url: null,
  //           name: '删除用户',
  //           sort: null,
  //           type: 3,
  //           parentId: 2,
  //           permission: 'system:users:delete'
  //         },
  //         {
  //           id: 7,
  //           url: null,
  //           name: '修改用户',
  //           sort: null,
  //           type: 3,
  //           parentId: 2,
  //           permission: 'system:users:update'
  //         },
  //         {
  //           id: 8,
  //           url: null,
  //           name: '查询用户',
  //           sort: null,
  //           type: 3,
  //           parentId: 2,
  //           permission: 'system:users:query'
  //         }
  //       ],
  //       parentId: 1
  //     },
  //     {
  //       id: 3,
  //       url: '/main/system/department',
  //       name: '部门管理',
  //       sort: 101,
  //       type: 2,
  //       children: [
  //         {
  //           id: 17,
  //           url: null,
  //           name: '创建部门',
  //           sort: null,
  //           type: 3,
  //           parentId: 3,
  //           permission: 'system:department:create'
  //         },
  //         {
  //           id: 18,
  //           url: null,
  //           name: '删除部门',
  //           sort: null,
  //           type: 3,
  //           parentId: 3,
  //           permission: 'system:department:delete'
  //         },
  //         {
  //           id: 19,
  //           url: null,
  //           name: '修改部门',
  //           sort: null,
  //           type: 3,
  //           parentId: 3,
  //           permission: 'system:department:update'
  //         },
  //         {
  //           id: 20,
  //           url: null,
  //           name: '查询部门',
  //           sort: null,
  //           type: 3,
  //           parentId: 3,
  //           permission: 'system:department:query'
  //         }
  //       ],
  //       parentId: 1
  //     },
  //     {
  //       id: 4,
  //       url: '/main/system/menu',
  //       name: '菜单管理',
  //       sort: 103,
  //       type: 2,
  //       children: [
  //         {
  //           id: 21,
  //           url: null,
  //           name: '创建菜单',
  //           sort: null,
  //           type: 3,
  //           parentId: 4,
  //           permission: 'system:menu:create'
  //         },
  //         {
  //           id: 22,
  //           url: null,
  //           name: '删除菜单',
  //           sort: null,
  //           type: 3,
  //           parentId: 4,
  //           permission: 'system:menu:delete'
  //         },
  //         {
  //           id: 23,
  //           url: null,
  //           name: '修改菜单',
  //           sort: null,
  //           type: 3,
  //           parentId: 4,
  //           permission: 'system:menu:update'
  //         },
  //         {
  //           id: 24,
  //           url: null,
  //           name: '查询菜单',
  //           sort: null,
  //           type: 3,
  //           parentId: 4,
  //           permission: 'system:menu:query'
  //         }
  //       ],
  //       parentId: 1
  //     },
  //     {
  //       id: 25,
  //       url: '/main/system/role',
  //       name: '角色管理',
  //       sort: 102,
  //       type: 2,
  //       children: [
  //         {
  //           id: 26,
  //           url: null,
  //           name: '创建角色',
  //           sort: null,
  //           type: 3,
  //           parentId: 25,
  //           permission: 'system:role:create'
  //         },
  //         {
  //           id: 27,
  //           url: null,
  //           name: '删除角色',
  //           sort: null,
  //           type: 3,
  //           parentId: 25,
  //           permission: 'system:role:delete'
  //         },
  //         {
  //           id: 28,
  //           url: null,
  //           name: '修改角色',
  //           sort: null,
  //           type: 3,
  //           parentId: 25,
  //           permission: 'system:role:update'
  //         },
  //         {
  //           id: 29,
  //           url: null,
  //           name: '查询角色',
  //           sort: null,
  //           type: 3,
  //           parentId: 25,
  //           permission: 'system:role:query'
  //         }
  //       ],
  //       parentId: 1
  //     }
  //   ]
  // },
  {
    id: 9,
    name: '商品中心',
    type: 1,
    url: '/main/category',
    icon: 'Orange',
    sort: 1,
    children: [
      {
        id: 15,
        url: '/main/category',
        name: '商品类别',
        sort: 104,
        type: 2,
        children: [
          {
            id: 30,
            url: null,
            name: '创建类别',
            sort: null,
            type: 3,
            parentId: 15,
            permission: 'system:category:create'
          },
          {
            id: 31,
            url: null,
            name: '删除类别',
            sort: null,
            type: 3,
            parentId: 15,
            permission: 'system:category:delete'
          },
          {
            id: 32,
            url: null,
            name: '修改类别',
            sort: null,
            type: 3,
            parentId: 15,
            permission: 'system:category:update'
          },
          {
            id: 33,
            url: null,
            name: '查询类别',
            sort: null,
            type: 3,
            parentId: 15,
            permission: 'system:category:query'
          }
        ],
        parentId: 9
      },
      {
        id: 16,
        url: '/main/info',
        name: '商品信息',
        sort: 105,
        type: 2,
        children: [
          {
            id: 34,
            url: null,
            name: '创建商品',
            sort: null,
            type: 3,
            parentId: 16,
            permission: 'system:goods:create'
          },
          {
            id: 35,
            url: null,
            name: '删除商品',
            sort: null,
            type: 3,
            parentId: 16,
            permission: 'system:goods:delete'
          },
          {
            id: 36,
            url: null,
            name: '修改商品',
            sort: null,
            type: 3,
            parentId: 16,
            permission: 'system:goods:update'
          },
          {
            id: 37,
            url: null,
            name: '查询商品',
            sort: null,
            type: 3,
            parentId: 16,
            permission: 'system:goods:query'
          }
        ],
        parentId: 9
      }
    ]
  }
  // {
  //   id: 10,
  //   name: '账变统计',
  //   type: 1,
  //   url: '/main/account',
  //   icon: 'el-icon-goods',
  //   sort: 2,
  //   children: [
  //     {
  //       id: 15,
  //       url: '/main/account',
  //       name: '账变报表',
  //       sort: 104,
  //       type: 2,
  //       parentId: 9
  //     }
  //   ]
  // }
]
