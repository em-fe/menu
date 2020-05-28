export default {
        "org": {
            "account_type": "org",
            "org_id": 100015,
            "staff_id": 0,
            "org_name": "王猫猫的主办",
            "org_service_tel": "4000630260",
            "org_logo": "https://static2.evente.cn/static/img/icon.jpg"
        },
        "version": {
            "version": "3.0.0",
            "version_name": "v3.0.0"
        },
        "editions": [
            {
                "edition_code": "ultimate",
                "edition_sub_code": "ultimate-1years"
            }
        ],
        "menus": [
            {
                "parent_code": "",
                "module_code": "home",
                "permission_code": "homepage",
                "name": "首页",
                "type": 1,
                "path": "/account/console",
                "icon": "",
                "tags": [
                    "new"
                ],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "homepage",
                        "module_code": "home",
                        "permission_code": "homepage_stats",
                        "name": "数据概览",
                        "type": 3,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "homepage",
                        "module_code": "home",
                        "permission_code": "homepage_publish",
                        "name": "最近发布",
                        "type": 3,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    }
                ]
            },
            {
                "parent_code": "",
                "module_code": "account",
                "permission_code": "account",
                "name": "账户",
                "type": 2,
                "path": "/account/accountinformation",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "account",
                        "module_code": "account",
                        "permission_code": "account_info",
                        "name": "账户信息",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "account_info",
                                "module_code": "account",
                                "permission_code": "account_org",
                                "name": "主办信息",
                                "type": 1,
                                "path": "/account/accountinformation",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "account_info",
                                "module_code": "account",
                                "permission_code": "account_auth",
                                "name": "认证信息",
                                "type": 1,
                                "path": "/account/authinformation",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "account_info",
                                "module_code": "account",
                                "permission_code": "account_security",
                                "name": "安全中心",
                                "type": 1,
                                "path": "/account/security",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "account",
                        "module_code": "account",
                        "permission_code": "account_staff",
                        "name": "子账号",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "account_staff",
                                "module_code": "account",
                                "permission_code": "account_staff_list",
                                "name": "账号列表",
                                "type": 1,
                                "path": "/account/subaccount",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "account_staff",
                                "module_code": "account",
                                "permission_code": "account_staff_role",
                                "name": "角色权限",
                                "type": 1,
                                "path": "/account/rolepermission",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "account",
                        "module_code": "account",
                        "permission_code": "account_services",
                        "name": "服务订购",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "account_services",
                                "module_code": "account",
                                "permission_code": "account_services_order",
                                "name": "订单列表",
                                "type": 1,
                                "path": "/account/service",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "account_services",
                                "module_code": "account",
                                "permission_code": "account_services_deposit",
                                "name": "保证金",
                                "type": 1,
                                "path": "/account/deposit",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    }
                ]
            },
            {
                "parent_code": "",
                "module_code": "event",
                "permission_code": "event",
                "name": "票务",
                "type": 1,
                "path": "/event",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "event",
                        "module_code": "event",
                        "permission_code": "event_list",
                        "name": "活动列表",
                        "type": 2,
                        "path": "/event",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "event_list",
                                "module_code": "event",
                                "permission_code": "event_publish",
                                "name": "发布活动",
                                "type": 5,
                                "path": "/event/eventpublish",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_blank",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "event_list",
                                "module_code": "event",
                                "permission_code": "event_check_tickets",
                                "name": "验票入场",
                                "type": 5,
                                "path": "/{id}/tickets/checked",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "2.0",
                                    "domain": "http://event.inner.evente.cn:8000",
                                    "target": "_blank",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "event",
                        "module_code": "event",
                        "permission_code": "event_overview",
                        "name": "活动概览",
                        "type": 1,
                        "path": "/event/overview",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "event",
                        "module_code": "event",
                        "permission_code": "event_manage",
                        "name": "活动管理",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "event_manage",
                                "module_code": "event",
                                "permission_code": "event_decoration",
                                "name": "购买页装修",
                                "type": 1,
                                "path": "/event/trimcdetail?id={id}",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_blank",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "event_manage",
                                "module_code": "event",
                                "permission_code": "event_manage_edit",
                                "name": "活动编辑",
                                "type": 1,
                                "path": "/event/eventpublish?event_id={id}",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_blank",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "event",
                        "module_code": "event",
                        "permission_code": "event_settings",
                        "name": "高级设置",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "event_settings",
                                "module_code": "event",
                                "permission_code": "event_setting_acccustom",
                                "name": "访问设置",
                                "type": 1,
                                "path": "/event/setting/acccustom",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "event_settings",
                                "module_code": "event",
                                "permission_code": "event_setting_purchasing",
                                "name": "限购设置",
                                "type": 1,
                                "path": "/event/setting/purchasing",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "event_settings",
                                "module_code": "event",
                                "permission_code": "event_setting_tickets",
                                "name": "批量出票",
                                "type": 1,
                                "path": "/event/setting/ticket",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "event_settings",
                                "module_code": "event",
                                "permission_code": "event_setting_infocustom",
                                "name": "短信定制",
                                "type": 1,
                                "path": "/event/setting/infocustom",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": [
                                    {
                                        "parent_code": "event_setting_infocustom",
                                        "module_code": "event",
                                        "permission_code": "event_setting_infocustom_button",
                                        "name": "按钮定制",
                                        "type": 4,
                                        "path": "#",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "3.0",
                                            "domain": "http://home.inner.evente.cn:8000",
                                            "target": "none",
                                            "denied_type": "popup",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    },
                                    {
                                        "parent_code": "event_setting_infocustom",
                                        "module_code": "event",
                                        "permission_code": "event_setting_infocustom_sms",
                                        "name": "短信定制",
                                        "type": 4,
                                        "path": "#",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "3.0",
                                            "domain": "http://home.inner.evente.cn:8000",
                                            "target": "none",
                                            "denied_type": "popup",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    }
                                ]
                            },
                            {
                                "parent_code": "event_settings",
                                "module_code": "event",
                                "permission_code": "event_setting_seatingmap",
                                "name": "座位图",
                                "type": 1,
                                "path": "/event/setting/seatingmap",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": [
                                    {
                                        "parent_code": "event_setting_seatingmap",
                                        "module_code": "event",
                                        "permission_code": "event_setting_seatingmap_add",
                                        "name": "创建座位图",
                                        "type": 5,
                                        "path": "/chart/create",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "2.0",
                                            "domain": "http://event.inner.evente.cn:8000",
                                            "target": "_blank",
                                            "denied_type": "error_page",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    },
                                    {
                                        "parent_code": "event_setting_seatingmap",
                                        "module_code": "event",
                                        "permission_code": "event_setting_seatingmap_edit",
                                        "name": "编辑座位图",
                                        "type": 5,
                                        "path": "/chart/area_list",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "2.0",
                                            "domain": "http://event.inner.evente.cn:8000",
                                            "target": "_blank",
                                            "denied_type": "error_page",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    }
                                ]
                            },
                            {
                                "parent_code": "event_settings",
                                "module_code": "event",
                                "permission_code": "event_setting_tickets_check",
                                "name": "在线验票",
                                "type": 1,
                                "path": "/event/setting/ticketInspection",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "event",
                        "module_code": "event",
                        "permission_code": "event_form",
                        "name": "信息收集",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "event_form",
                                "module_code": "event",
                                "permission_code": "event_form_list",
                                "name": "收集列表",
                                "type": 1,
                                "path": "/event/formlist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": [
                                    {
                                        "parent_code": "event_form_list",
                                        "module_code": "event",
                                        "permission_code": "event_form_publish",
                                        "name": "创建表单",
                                        "type": 5,
                                        "path": "/event/formlist",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "3.0",
                                            "domain": "http://home.inner.evente.cn:8000",
                                            "target": "_self",
                                            "denied_type": "error_page",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "parent_code": "event",
                        "module_code": "event",
                        "permission_code": "event_spread",
                        "name": "活动推广",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "event_spread",
                                "module_code": "event",
                                "permission_code": "event_spread_share",
                                "name": "微信分享",
                                "type": 1,
                                "path": "/event/wechatshare",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "event",
                        "module_code": "event",
                        "permission_code": "event_report",
                        "name": "活动报表",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "event_report",
                                "module_code": "event",
                                "permission_code": "event_report_sales",
                                "name": "销售报表",
                                "type": 1,
                                "path": "/event/saleReportForm",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "event_report",
                                "module_code": "event",
                                "permission_code": "event_report_tickets",
                                "name": "出票报表",
                                "type": 1,
                                "path": "/event/ticketReportForm",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "event_report",
                                "module_code": "event",
                                "permission_code": "event_report_scene",
                                "name": "场次报表",
                                "type": 1,
                                "path": "/event/sceneReportForm",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "event",
                        "module_code": "event",
                        "permission_code": "event_tickets",
                        "name": "验票热力图",
                        "type": 1,
                        "path": "/event/heatmap",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_blank",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    }
                ]
            },
            {
                "parent_code": "",
                "module_code": "meetup",
                "permission_code": "meetup",
                "name": "报名",
                "type": 1,
                "path": "/meetup/activity",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "meetup",
                        "module_code": "meetup",
                        "permission_code": "meetup_list",
                        "name": "报名列表",
                        "type": 2,
                        "path": "/meetup/activity",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "meetup",
                        "module_code": "meetup",
                        "permission_code": "meetup_publish",
                        "name": "报名发布",
                        "type": 2,
                        "path": "/meetup/light",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    }
                ]
            },
            {
                "parent_code": "",
                "module_code": "form",
                "permission_code": "form",
                "name": "表单",
                "type": 1,
                "path": "/form",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": []
            },
            {
                "parent_code": "",
                "module_code": "goods",
                "permission_code": "goods",
                "name": "周边",
                "type": 1,
                "path": "/goods/commodities",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_blank",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": []
            },
            {
                "parent_code": "",
                "module_code": "shop",
                "permission_code": "shop",
                "name": "店铺/小程序",
                "type": 1,
                "path": "/shop/wepage",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "shop",
                        "module_code": "shop",
                        "permission_code": "shop_web",
                        "name": "微店铺",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "shop_web",
                                "module_code": "shop",
                                "permission_code": "shop_web_list",
                                "name": "页面装修",
                                "type": 1,
                                "path": "/shop/list",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "shop_web",
                                "module_code": "shop",
                                "permission_code": "shop_web_nav",
                                "name": "底导航",
                                "type": 1,
                                "path": "/shop/navlist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "shop_web",
                                "module_code": "shop",
                                "permission_code": "shop_web_event",
                                "name": "活动列表",
                                "type": 1,
                                "path": "/shop/eventlist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "shop_web",
                                "module_code": "shop",
                                "permission_code": "shop_web_goods",
                                "name": "商品列表",
                                "type": 1,
                                "path": "/shop/goodslist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "shop",
                        "module_code": "shop",
                        "permission_code": "shop_wxapp",
                        "name": "小程序店铺",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "shop_wxapp",
                                "module_code": "shop",
                                "permission_code": "shop_wxapp_page",
                                "name": "小程序页面",
                                "type": 1,
                                "path": "/shop/wepage",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "shop_wxapp",
                                "module_code": "shop",
                                "permission_code": "shop_wxapp_nav",
                                "name": "底导航设置",
                                "type": 1,
                                "path": "/shop/wechart",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "shop_wxapp",
                                "module_code": "shop",
                                "permission_code": "shop_wxapp_event",
                                "name": "活动列表",
                                "type": 1,
                                "path": "/shop/welist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "shop_wxapp",
                                "module_code": "shop",
                                "permission_code": "shop_wxapp_goods",
                                "name": "商品列表",
                                "type": 1,
                                "path": "/shop/wxgoodslist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": false,
                                "sub_menus": []
                            }
                        ]
                    }
                ]
            },
            {
                "parent_code": "",
                "module_code": "distribution",
                "permission_code": "distrib",
                "name": "分销神器",
                "type": 1,
                "path": "/marketing/distrib",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": false,
                "sub_menus": []
            },
            {
                "parent_code": "",
                "module_code": "marketing",
                "permission_code": "marketing",
                "name": "营销工具",
                "type": 1,
                "path": "/marketing",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_coupon",
                        "name": "优惠券",
                        "type": 2,
                        "path": "/marketing/coupon/list",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "buy_functions",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_vcode",
                        "name": "优惠码",
                        "type": 1,
                        "path": "/marketing/favorable/list",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_discount",
                        "name": "限时折扣",
                        "type": 2,
                        "path": "/marketing/tabulation",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "buy_functions",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_integral",
                        "name": "积分抵现",
                        "type": 2,
                        "path": "/marketing/coins",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "buy_functions",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_bargain",
                        "name": "砍价",
                        "type": 2,
                        "path": "/bargain/index",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "2.0",
                            "domain": "http://coupon.inner.evente.cn:8000",
                            "target": "_blank",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_yearcard",
                        "name": "年卡",
                        "type": 1,
                        "path": "/marketing/yearcard",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "buy_functions",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "marketing_yearcard",
                                "module_code": "marketing",
                                "permission_code": "marketing_yearcard_list",
                                "name": "年卡",
                                "type": 1,
                                "path": "/marketing/yearcard",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "marketing_yearcard",
                                "module_code": "marketing",
                                "permission_code": "marketing_yearcard_order",
                                "name": "预约订单",
                                "type": 1,
                                "path": "/marketing/appointment",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_regiment",
                        "name": "拼团",
                        "type": 1,
                        "path": "/collage/activelist",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "marketing_regiment",
                                "module_code": "marketing",
                                "permission_code": "marketing_regiment_list",
                                "name": "拼团列表",
                                "type": 1,
                                "path": "/marketing/collage/activelist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "marketing_regiment",
                                "module_code": "marketing",
                                "permission_code": "marketing_regiment_order",
                                "name": "拼团订单",
                                "type": 1,
                                "path": "/marketing/collage/orderlist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_fulldis",
                        "name": "满减满折",
                        "type": 1,
                        "path": "/marketing/fulldis",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_shipping",
                        "name": "满包邮",
                        "type": 1,
                        "path": "/marketing/shipping",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_points_mall",
                        "name": "积分商城",
                        "type": 1,
                        "path": "/marketing/integralmall",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_distribution",
                        "name": "分销",
                        "type": 2,
                        "path": "/distributions/task/overview",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "buy_functions",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "marketing_distribution",
                                "module_code": "marketing",
                                "permission_code": "marketing_bi_overview",
                                "name": "我的分销",
                                "type": 1,
                                "path": "#",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "none",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": [
                                    {
                                        "parent_code": "marketing_bi_overview",
                                        "module_code": "marketing",
                                        "permission_code": "marketing_bi_task",
                                        "name": "分销任务",
                                        "type": 1,
                                        "path": "/distributions/task/overview",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "3.0",
                                            "domain": "http://home.inner.evente.cn:8000",
                                            "target": "_self",
                                            "denied_type": "buy_functions",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    },
                                    {
                                        "parent_code": "marketing_bi_overview",
                                        "module_code": "marketing",
                                        "permission_code": "marketing_bi_channel",
                                        "name": "渠道管理",
                                        "type": 1,
                                        "path": "/distributions/channelmanage",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "3.0",
                                            "domain": "http://home.inner.evente.cn:8000",
                                            "target": "_self",
                                            "denied_type": "error_page",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    },
                                    {
                                        "parent_code": "marketing_bi_overview",
                                        "module_code": "marketing",
                                        "permission_code": "marketing_bi_order",
                                        "name": "渠道订单",
                                        "type": 1,
                                        "path": "/distributions/channelorder",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "3.0",
                                            "domain": "http://home.inner.evente.cn:8000",
                                            "target": "_self",
                                            "denied_type": "error_page",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    },
                                    {
                                        "parent_code": "marketing_bi_overview",
                                        "module_code": "marketing",
                                        "permission_code": "marketing_bi_mychannel",
                                        "name": "我的渠道",
                                        "type": 1,
                                        "path": "/distributions/mychannel",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "3.0",
                                            "domain": "http://home.inner.evente.cn:8000",
                                            "target": "_self",
                                            "denied_type": "error_page",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    }
                                ]
                            },
                            {
                                "parent_code": "marketing_distribution",
                                "module_code": "marketing",
                                "permission_code": "marketing_bi_market",
                                "name": "渠道市场",
                                "type": 1,
                                "path": "#",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "none",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": [
                                    {
                                        "parent_code": "marketing_bi_market",
                                        "module_code": "marketing",
                                        "permission_code": "marketing_bi_channel_market",
                                        "name": "渠道市场",
                                        "type": 1,
                                        "path": "/distributions/channelmarket",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "3.0",
                                            "domain": "http://home.inner.evente.cn:8000",
                                            "target": "_self",
                                            "denied_type": "error_page",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_freight",
                        "name": "运费设置",
                        "type": 2,
                        "path": "marketing/freight",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_blank",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_wechat",
                        "name": "公众号管理",
                        "type": 2,
                        "path": "/wechat/brief",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_msgpush",
                        "name": "微信消息通知",
                        "type": 2,
                        "path": "/wechat/push",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "buy_functions",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_logo",
                        "name": "白标定制",
                        "type": 2,
                        "path": "/marketing/whicustom",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "buy_functions",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_sms_sign",
                        "name": "短信签名定制",
                        "type": 2,
                        "path": "/marketing/shortsigncustom",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "buy_functions",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_ticket_machine",
                        "name": "取票机管理",
                        "type": 1,
                        "path": "/marketing/machine/getTicketRecord",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "marketing_ticket_machine",
                                "module_code": "marketing",
                                "permission_code": "marketing_ticket_machine_record",
                                "name": "取票记录",
                                "type": 1,
                                "path": "/marketing/machine/getTicketRecord",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "marketing_ticket_machine",
                                "module_code": "marketing",
                                "permission_code": "marketing_ticket_machine_admin",
                                "name": "管理员设置",
                                "type": 1,
                                "path": "/marketing/machine/adminset",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "marketing_ticket_machine",
                                "module_code": "marketing",
                                "permission_code": "marketing_ticket_machine_ads",
                                "name": "广告管理",
                                "type": 1,
                                "path": "/marketing/machine/adManage",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_material",
                        "name": "素材管理",
                        "type": 1,
                        "path": "/marketing/material/list",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_kefu",
                        "name": "在线客服",
                        "type": 1,
                        "path": "/marketing/cuservice",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "marketing_kefu",
                                "module_code": "marketing",
                                "permission_code": "marketing_kefu_seats",
                                "name": "坐席列表",
                                "type": 1,
                                "path": "/marketing/cuservice",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_live",
                        "name": "小程序直播",
                        "type": 1,
                        "path": "/marketing/wechatLive/liveList",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "marketing_live",
                                "module_code": "marketing",
                                "permission_code": "marketing_live_items",
                                "name": "直播列表",
                                "type": 1,
                                "path": "/marketing/wechatLive/liveList",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "marketing_live",
                                "module_code": "marketing",
                                "permission_code": "marketing_live_products",
                                "name": "商品列表",
                                "type": 1,
                                "path": "/marketing/wechatLive/goodlist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_clock",
                        "name": "签到打卡",
                        "type": 1,
                        "path": "/marketing/clock",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_game_lottery",
                        "name": "抽奖游戏",
                        "type": 1,
                        "path": "/marketing/game/lottery",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_game_quiz",
                        "name": "竞猜游戏",
                        "type": 1,
                        "path": "/marketing/game/quiz",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "marketing",
                        "module_code": "marketing",
                        "permission_code": "marketing_game_shooting",
                        "name": "投篮游戏",
                        "type": 1,
                        "path": "/marketing/game/shooting",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    }
                ]
            },
            {
                "parent_code": "",
                "module_code": "member",
                "permission_code": "member",
                "name": "会员CRM",
                "type": 1,
                "path": "/crm/contacts",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "member",
                        "module_code": "member",
                        "permission_code": "member_contacts",
                        "name": "用户管理",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "member_contacts",
                                "module_code": "member",
                                "permission_code": "member_contacts_list",
                                "name": "用户列表",
                                "type": 1,
                                "path": "/crm/contacts",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": [
                                    {
                                        "parent_code": "member_contacts_list",
                                        "module_code": "member",
                                        "permission_code": "member_contacts_export",
                                        "name": "导出联系人",
                                        "type": 5,
                                        "path": "#",
                                        "icon": "",
                                        "tags": [],
                                        "options": {
                                            "version": "3.0",
                                            "domain": "http://home.inner.evente.cn:8000",
                                            "target": "none",
                                            "denied_type": "popup",
                                            "denied_tips": "当前功能无权限访问"
                                        },
                                        "is_accessible": true,
                                        "sub_menus": []
                                    }
                                ]
                            },
                            {
                                "parent_code": "member_contacts",
                                "module_code": "member",
                                "permission_code": "member_contacts_tags",
                                "name": "标签管理",
                                "type": 1,
                                "path": "/crm/label",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "member_contacts",
                                "module_code": "member",
                                "permission_code": "member_contacts_export_task",
                                "name": "导出任务",
                                "type": 1,
                                "path": "/crm/exclist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "member",
                        "module_code": "member",
                        "permission_code": "member_settings",
                        "name": "会员设置",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "member_settings",
                                "module_code": "member",
                                "permission_code": "member_settings_level",
                                "name": "等级设置",
                                "type": 1,
                                "path": "/crm/levelindex",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "member",
                        "module_code": "member",
                        "permission_code": "member_integral",
                        "name": "积分管理",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "member_integral",
                                "module_code": "member",
                                "permission_code": "member_integral_overview",
                                "name": "积分概览",
                                "type": 1,
                                "path": "/crm/integral",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "member_integral",
                                "module_code": "member",
                                "permission_code": "member_integral_setting",
                                "name": "积分抵扣",
                                "type": 1,
                                "path": "/crm/intsetting",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "member",
                        "module_code": "member",
                        "permission_code": "member_recharge",
                        "name": "储值管理",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "member_recharge",
                                "module_code": "member",
                                "permission_code": "member_recharge_overview",
                                "name": "储值概览",
                                "type": 1,
                                "path": "/crm/store",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "member_recharge",
                                "module_code": "member",
                                "permission_code": "member_recharge_setting",
                                "name": "储值设置",
                                "type": 1,
                                "path": "/crm/storesetting",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "member_recharge",
                                "module_code": "member",
                                "permission_code": "member_recharge_code",
                                "name": "储值兑换码",
                                "type": 1,
                                "path": "/crm/storecode",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "buy_functions",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "member",
                        "module_code": "member",
                        "permission_code": "member_sms",
                        "name": "短信管理",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "member_sms",
                                "module_code": "member",
                                "permission_code": "member_sms_send",
                                "name": "短信发送",
                                "type": 1,
                                "path": "/crm/message",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "member_sms",
                                "module_code": "member",
                                "permission_code": "member_sms_setting",
                                "name": "模板管理",
                                "type": 1,
                                "path": "/crm/mestemp",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    }
                ]
            },
            {
                "parent_code": "",
                "module_code": "data",
                "permission_code": "data",
                "name": "数据",
                "type": 1,
                "path": "/data/mobileanalyze",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "data",
                        "module_code": "data",
                        "permission_code": "data_mobile",
                        "name": "手机号分析",
                        "type": 1,
                        "path": "/data/mobileanalyze",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "data",
                        "module_code": "data",
                        "permission_code": "data_idcard",
                        "name": "身份证分析",
                        "type": 1,
                        "path": "/data/identityanalyze",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "buy_functions",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": []
                    },
                    {
                        "parent_code": "data",
                        "module_code": "data",
                        "permission_code": "data_stats",
                        "name": "数据大屏",
                        "type": 1,
                        "path": "/data/profile",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "_self",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "data_stats",
                                "module_code": "data",
                                "permission_code": "data_stats_dashboard",
                                "name": "数据概览",
                                "type": 1,
                                "path": "/data/profile",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "data_stats",
                                "module_code": "data",
                                "permission_code": "data_stats_user",
                                "name": "用户分析",
                                "type": 1,
                                "path": "/data/seguser",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    }
                ]
            },
            {
                "parent_code": "",
                "module_code": "order",
                "permission_code": "order",
                "name": "订单",
                "type": 1,
                "path": "/order/allorder",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "order",
                        "module_code": "order",
                        "permission_code": "order_view",
                        "name": "订单查询",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": false,
                        "sub_menus": [
                            {
                                "parent_code": "order_view",
                                "module_code": "order",
                                "permission_code": "order_view_items",
                                "name": "订单查询",
                                "type": 1,
                                "path": "/order/orderlist",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": false,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "order",
                        "module_code": "order",
                        "permission_code": "order_service",
                        "name": "售后服务",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": false,
                        "sub_menus": [
                            {
                                "parent_code": "order_service",
                                "module_code": "order",
                                "permission_code": "order_service_refund",
                                "name": "退款退货",
                                "type": 1,
                                "path": "/order/returns",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": false,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "order",
                        "module_code": "order",
                        "permission_code": "order_logistics",
                        "name": "物流服务",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": false,
                        "sub_menus": [
                            {
                                "parent_code": "order_logistics",
                                "module_code": "order",
                                "permission_code": "order_logistics_transport",
                                "name": "运费设置",
                                "type": 1,
                                "path": "/marketing/freight",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_blank",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": false,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "order",
                        "module_code": "order",
                        "permission_code": "order_settings",
                        "name": "交易设置",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": false,
                        "sub_menus": [
                            {
                                "parent_code": "order_settings",
                                "module_code": "order",
                                "permission_code": "order_settings_payment",
                                "name": "交易设置",
                                "type": 1,
                                "path": "/order/transet",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": false,
                                "sub_menus": []
                            }
                        ]
                    }
                ]
            },
            {
                "parent_code": "",
                "module_code": "finance",
                "permission_code": "finance",
                "name": "财务",
                "type": 1,
                "path": "/finance/overview",
                "icon": "",
                "tags": [],
                "options": {
                    "version": "3.0",
                    "domain": "http://home.inner.evente.cn:8000",
                    "target": "_self",
                    "denied_type": "error_page",
                    "denied_tips": "当前功能无权限访问"
                },
                "is_accessible": true,
                "sub_menus": [
                    {
                        "parent_code": "finance",
                        "module_code": "finance",
                        "permission_code": "finance_capital",
                        "name": "我的资产",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "finance_capital",
                                "module_code": "finance",
                                "permission_code": "finance_capital_overview",
                                "name": "收入概览",
                                "type": 1,
                                "path": "/finance/overview",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "finance",
                        "module_code": "finance",
                        "permission_code": "finance_trade",
                        "name": "交易明细",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "finance_trade",
                                "module_code": "finance",
                                "permission_code": "finance_trade_list",
                                "name": "明细列表",
                                "type": 1,
                                "path": "/finance/all",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    },
                    {
                        "parent_code": "finance",
                        "module_code": "finance",
                        "permission_code": "finance_rate",
                        "name": "账户费率",
                        "type": 1,
                        "path": "#",
                        "icon": "",
                        "tags": [],
                        "options": {
                            "version": "3.0",
                            "domain": "http://home.inner.evente.cn:8000",
                            "target": "none",
                            "denied_type": "error_page",
                            "denied_tips": "当前功能无权限访问"
                        },
                        "is_accessible": true,
                        "sub_menus": [
                            {
                                "parent_code": "finance_rate",
                                "module_code": "finance",
                                "permission_code": "finance_rate_pay",
                                "name": "自收款",
                                "type": 1,
                                "path": "/finance/acc",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            },
                            {
                                "parent_code": "finance_rate",
                                "module_code": "finance",
                                "permission_code": "finance_rate_account",
                                "name": "收款账户",
                                "type": 1,
                                "path": "/finance/depositaccount",
                                "icon": "",
                                "tags": [],
                                "options": {
                                    "version": "3.0",
                                    "domain": "http://home.inner.evente.cn:8000",
                                    "target": "_self",
                                    "denied_type": "error_page",
                                    "denied_tips": "当前功能无权限访问"
                                },
                                "is_accessible": true,
                                "sub_menus": []
                            }
                        ]
                    }
                ]
            }
        ]
};
