/*
请求API
 */ 

var url = "http://www.hz20181008.cn";

// 注册图片验证码
var register_img = url + '/api/image/icode'
// 注册短信验证码
var register_code = url + '/api/sms/register'
// 注册提交
var register_up = url + '/api/sign/up';
// 登录提交
var login = url +'/api/sign/in'
// 忘记密码提交
var forget_pwd = url + '/api/sign/forget'
// 忘记密码短信验证码
var forget_pwd_code = url + '/api/sms/forget'

// 钱包-用户财产信息
var wallet_property = url +'/api/usercenter/asset'
// 钱包-账户信息管理-修改登录密码
var login_pwd = url +'/api/usercenter/editpass'
// 钱包-账户信息管理-修改二级密码
var reg_pwd = url +'/api/usercenter/editpass2'
// 钱包-账户信息管理-修改密码短信验证码
var changes_pwd_code = url + '/api/sms/editpass'
// 钱包-账户信息管理-绑定银行卡/支付宝/微信 提交
var pay_save = url +'/api/usercenter/pay_save'
// 钱包-账户信息管理-支付宝初始化数据
var alipay_data = url +'/api/usercenter/pay_init'
// 钱包-账户信息管理-支付宝二维码图片上传
var alipay_updata = url +'/api/uploads/alipay'
// 钱包-账户信息管理-微信二维码图片上传
var wechat_updata = url +'/api/uploads/wechat'
// 钱包-账户信息管理-验证码
var binding_sms = url +'/api/sms/paysave'
// 钱包-钱包地址
var wallet_address = url + '/api/walletaddress'
// 钱包-激活码
var wallet_activation = url + '/api/pin/lists'
// 钱包-激活码转让
var activation_turn = url + '/api/pin/trans'
// 钱包-节点种子转让
var wallet_turnout_node = url + '/api/usercenter/trans_asset1'
// 钱包-节点转入转出记录
var turn_in_out_node = url + '/api/Usercenter/trans_asset1_record'
// 钱包-激活码转入转出记录
var turn_in_out_activation = url + '/api/pin/trans_record'


// 首页-激活
var home_activation = url + '/api/pin/active'
// 首页-退出登录
var sign_out = url + '/api/sign/out'
// 首页-内容
var hone_content = url + '/api/usercenter/info'
// 首页-我的社区
var my_community = url + '/api/tree/child'
// 首页-购买
var buy_node = url + '/api/buy_node'
// 首页-购买-价格
var buy_node_price = url + '/api/buy_node'
// 首页-转出
var turn_out_node = url + '/api/turn_out_node'

// 首页-申购节点
var purchase_node = url + '/api/core/buy'
// 首页-申购节点-记录
var purchase_list_content = url + '/api/core/record_buy'
// 首页-出售节点
var sell_node = url + '/api/core/sell'
// 首页-出售节点-记录
var sell_node_list = url + '/api/core/record_sell'
// 首页-出售节点数量-申购节点数量
var sell_and_buy_node = url + '/api/core/init_buy_and_sell'

// 首页-订单记录-出售列表
var sell_list = url +'/api/core/order_sell'
// 首页-订单记录-申购列表
var purchase_list = url +'/api/core/order_buy'
// 首页-订单记录-申购详情
var purchase_details_list = url +'/api/core/order_details_buy'
// 首页-订单记录-申购详情-申购打款凭证图片
var uploads_transfer = url +'/api/uploads/transfer'
// 首页-订单记录-确认收款
var receivables = url +'/api/core/order_status_0'
// 首页-订单记录-确认上传凭证图片
var transfer_image = url +'/api/core/order_status_2'
// 首页-订单记录-未收到款
var uncollected = url +'/api/core/order_status_3'

