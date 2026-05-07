import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { chromium } = require('C:/Users/HP/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')

const edgePath = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'

const shots = [
  {
    path: 'src/assets/projects/yisheng-showcase-admin.png',
    viewport: { width: 1440, height: 900 },
    html: `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8" />
<style>
*{box-sizing:border-box}body{margin:0;font-family:"Microsoft YaHei",Arial,sans-serif;background:#eef2f7;color:#263238}.screen{width:1440px;height:900px;background:#f5f7fb;display:grid;grid-template-columns:236px 1fr}.side{background:#1f2937;color:#d9e2ef;padding:28px 20px}.brand{font-size:22px;font-weight:900;color:white;margin-bottom:34px}.nav{display:grid;gap:10px}.nav span{padding:13px 14px;border-radius:8px;font-weight:700}.nav .on{background:#2f80ed;color:white}.main{padding:28px}.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:22px}.top h1{margin:0;color:#111827;font-size:30px}.tag{background:#e8f3ff;color:#2563eb;padding:8px 12px;border-radius:999px;font-weight:800}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:18px}.card{background:white;border:1px solid #e2e8f0;border-radius:8px;padding:18px;box-shadow:0 16px 38px rgba(31,41,55,.08)}.stat b{display:block;font-size:30px;color:#111827;margin:4px 0}.stat span{color:#64748b;font-weight:700}.work{display:grid;grid-template-columns:1.15fr .85fr;gap:18px}.section-title{font-size:20px;font-weight:900;margin-bottom:14px}.billing{display:grid;grid-template-columns:1fr 300px;gap:14px}.customer{border:1px solid #e2e8f0;border-radius:8px;padding:14px;background:#fbfdff}.customer h3{margin:0 0 8px;font-size:18px}.pill{display:inline-block;background:#ecfdf5;color:#047857;border-radius:999px;padding:4px 9px;font-size:13px;font-weight:800;margin-right:6px}.table{width:100%;border-collapse:collapse;margin-top:14px;font-size:14px}.table th,.table td{border-bottom:1px solid #e5e7eb;padding:12px 10px;text-align:left}.table th{color:#64748b;background:#f8fafc}.checkout{background:#111827;color:white;border-radius:8px;padding:18px}.checkout .line{display:flex;justify-content:space-between;margin:12px 0;color:#d1d5db}.total{font-size:28px;font-weight:900;color:#fbbf24}.chart{height:240px;display:flex;align-items:end;gap:12px;padding-top:18px}.bar{flex:1;border-radius:8px 8px 0 0;background:linear-gradient(180deg,#2f80ed,#14b8a6)}.flow{display:grid;gap:10px}.flow div{border:1px solid #e2e8f0;background:#fbfdff;border-radius:8px;padding:13px 14px;font-weight:800}.flow small{display:block;color:#64748b;margin-top:4px;font-weight:600}
</style>
</head>
<body><div class="screen"><aside class="side"><div class="brand">颐生悦管理端</div><div class="nav"><span class="on">开单管理</span><span>客户档案</span><span>预约排班</span><span>商品库存</span><span>员工业绩</span><span>数据报表</span></div></aside><main class="main"><div class="top"><h1>门店经营工作台</h1><div class="tag">Rust API · PostgreSQL · Vue3</div></div><section class="stats"><div class="card stat"><span>今日预约</span><b>36</b><span>较昨日 +12%</span></div><div class="card stat"><span>开单金额</span><b>¥18,420</b><span>储值卡/次卡联动</span></div><div class="card stat"><span>库存预警</span><b>8</b><span>自动校验库存流转</span></div><div class="card stat"><span>回访任务</span><b>24</b><span>护理记录自动生成</span></div></section><section class="work"><div class="card"><div class="section-title">开单交易与客户资产</div><div class="billing"><div><div class="customer"><h3>客户：李女士</h3><span class="pill">VIP 储值卡</span><span class="pill">待确认订单</span><p>服务项目：肩颈调理 · 艾灸护理 · 草本理疗</p></div><table class="table"><tr><th>项目</th><th>技师</th><th>数量</th><th>金额</th></tr><tr><td>肩颈调理</td><td>王技师</td><td>1</td><td>¥398</td></tr><tr><td>艾灸护理</td><td>陈技师</td><td>1</td><td>¥268</td></tr><tr><td>草本理疗包</td><td>库存出库</td><td>2</td><td>¥156</td></tr></table></div><div class="checkout"><div>订单结算</div><div class="line"><span>权益抵扣</span><b>-¥200</b></div><div class="line"><span>客户确认</span><b>小程序待确认</b></div><div class="line"><span>业绩分配</span><b>2 人</b></div><div class="total">¥622</div></div></div></div><div class="card"><div class="section-title">服务履约闭环</div><div class="flow"><div>预约创建<small>技师排期 / 拖拽改期</small></div><div>到店核销<small>服务开始 / 项目调整</small></div><div>发送客户确认<small>小程序订单确认</small></div><div>支付确认<small>资产流水 / 库存流水 / 业绩统计</small></div></div><div class="chart"><span class="bar" style="height:52%"></span><span class="bar" style="height:75%"></span><span class="bar" style="height:43%"></span><span class="bar" style="height:88%"></span><span class="bar" style="height:61%"></span></div></div></section></main></div></body></html>`,
  },
  {
    path: 'src/assets/projects/yisheng-showcase-staff.png',
    viewport: { width: 390, height: 844 },
    html: `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8" /><style>
*{box-sizing:border-box}body{margin:0;font-family:"Microsoft YaHei",Arial,sans-serif;background:#efe8e3;color:#2b211d}.phone{width:390px;height:844px;background:linear-gradient(#f9f5f2,#ede4de);padding:18px 14px 86px}.hero{background:linear-gradient(135deg,#9b7a70,#c9a99c);color:white;border-radius:18px;padding:22px;box-shadow:0 18px 35px rgba(82,54,43,.18)}.hero h1{margin:0;font-size:24px}.hero p{margin:8px 0 0;color:#fff5ef}.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0}.card{background:white;border:1px solid rgba(97,64,51,.12);border-radius:16px;padding:15px;box-shadow:0 12px 24px rgba(96,65,52,.08)}.card b{display:block;font-size:24px;margin-top:6px}.title{font-weight:900;margin:18px 0 10px}.task{display:flex;gap:12px;align-items:center;margin-bottom:12px}.time{background:#f6ede8;border-radius:14px;padding:10px 8px;text-align:center;font-weight:900;color:#8a6257;min-width:74px}.info h3{font-size:16px;margin:0 0 5px}.info p{font-size:13px;color:#7c6a62;margin:0}.status{display:inline-block;margin-top:8px;background:#ecfdf5;color:#047857;border-radius:999px;padding:4px 8px;font-size:12px;font-weight:800}.bottom{position:absolute;left:0;right:0;bottom:0;height:68px;background:white;display:grid;grid-template-columns:repeat(5,1fr);border-top:1px solid #e6d9d1}.bottom span{display:flex;align-items:center;justify-content:center;font-size:12px;color:#9b7a70;font-weight:800}.wrap{position:relative;width:390px;height:844px;overflow:hidden}
</style></head><body><div class="wrap"><main class="phone"><section class="hero"><h1>员工工作台</h1><p>预约执行、服务履约、客户跟进一屏处理</p></section><section class="grid"><div class="card">待服务<b>12</b></div><div class="card">待回访<b>7</b></div><div class="card">今日业绩<b>¥3,860</b></div><div class="card">客户确认<b>5</b></div></section><div class="title">今日预约</div><article class="card task"><div class="time">09:30<br/>到店</div><div class="info"><h3>李女士 · 肩颈调理</h3><p>服务开始 - 项目调整 - 客户确认</p><span class="status">可执行</span></div></article><article class="card task"><div class="time">14:00<br/>护理</div><div class="info"><h3>张女士 · 艾灸护理</h3><p>自动生成护理记录与回访任务</p><span class="status">待确认</span></div></article><div class="title">客户资产</div><section class="card"><b>储值卡 ¥2,680</b><p>次卡 8 次 · 时间卡 42 天 · 消费流水可追溯</p></section></main><nav class="bottom"><span>工作台</span><span>预约</span><span>客户</span><span>成长</span><span>我的</span></nav></div></body></html>`,
  },
  {
    path: 'src/assets/projects/yisheng-showcase-mini.png',
    viewport: { width: 390, height: 844 },
    html: `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8" /><style>
*{box-sizing:border-box}body{margin:0;font-family:"Microsoft YaHei",Arial,sans-serif;background:#f7f1ec;color:#2a211d}.wrap{position:relative;width:390px;height:844px;overflow:hidden;background:#f7f1ec}.page{padding:20px 16px 88px}.member{background:linear-gradient(135deg,#5b4038,#b08a78);border-radius:20px;color:white;padding:22px;box-shadow:0 18px 36px rgba(86,60,48,.18)}.member h1{margin:0;font-size:23px}.member p{opacity:.9}.asset{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}.asset div{background:rgba(255,255,255,.16);border-radius:14px;padding:12px 8px;text-align:center;font-weight:800}.section{margin-top:18px}.section h2{font-size:18px;margin:0 0 10px}.card{background:white;border-radius:18px;padding:16px;margin-bottom:12px;border:1px solid #eaded7;box-shadow:0 12px 26px rgba(86,60,48,.08)}.order{display:flex;justify-content:space-between;gap:14px}.btn{background:#8a6257;color:white;border-radius:999px;padding:8px 13px;font-size:13px;font-weight:900;align-self:center;white-space:nowrap}.product{display:grid;grid-template-columns:74px 1fr;gap:12px}.pic{background:linear-gradient(135deg,#e9d7cd,#cbaea0);border-radius:14px}.muted{color:#7b6a62;font-size:13px}.bottom{position:absolute;bottom:0;left:0;right:0;height:68px;background:white;display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #eaded7}.bottom span{display:flex;align-items:center;justify-content:center;color:#8a6257;font-size:12px;font-weight:900}
</style></head><body><div class="wrap"><main class="page"><section class="member"><h1>颐生悦会员中心</h1><p>预约、确认订单、查看权益与健康档案</p><div class="asset"><div>储值<br/>2680</div><div>次卡<br/>8</div><div>优惠券<br/>3</div></div></section><section class="section"><h2>待确认服务</h2><article class="card order"><div><b>肩颈调理 + 艾灸护理</b><p class="muted">技师已完成项目调整，请确认本次服务明细</p></div><div class="btn">去确认</div></article></section><section class="section"><h2>快捷预约</h2><article class="card order"><div><b>明日 14:00 可预约</b><p class="muted">支持门店、技师、服务项目选择</p></div><div class="btn">预约</div></article></section><section class="section"><h2>推荐卡项</h2><article class="card product"><div class="pic"></div><div><b>草本调理月卡</b><p class="muted">权益快照、消费记录、待确认订单联动展示</p></div></article></section></main><nav class="bottom"><span>首页</span><span>预约</span><span>健康</span><span>我的</span></nav></div></body></html>`,
  },
]

const browser = await chromium.launch({
  headless: true,
  executablePath: edgePath,
})

for (const shot of shots) {
  const page = await browser.newPage({
    viewport: shot.viewport,
    deviceScaleFactor: 1,
  })
  await page.setContent(shot.html, { waitUntil: 'load' })
  await page.screenshot({ path: shot.path, fullPage: false })
  await page.close()
}

await browser.close()
