<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import profilePhoto from './assets/photo.jpg'
import yishengAdmin01 from './assets/projects/QQ20260507-222434.png'
import yishengAdmin02 from './assets/projects/QQ20260507-222510.png'
import yishengAdmin03 from './assets/projects/QQ20260507-222556.png'
import yishengAdmin04 from './assets/projects/QQ20260507-222714.png'
import yishengAdmin05 from './assets/projects/QQ20260507-222815.png'
import yishengAdmin06 from './assets/projects/QQ20260507-232532.png'
import yishengStaff01 from './assets/projects/QQ20260507-223009.png'
import yishengStaff02 from './assets/projects/QQ20260507-223110.png'
import yishengStaff03 from './assets/projects/QQ20260507-223132.png'
import yishengStaff04 from './assets/projects/QQ20260507-223204.png'
import yishengStaff05 from './assets/projects/QQ20260507-232420.png'
import yishengMini01 from './assets/projects/Screenshot_20260509_170956.jpg'
import yishengMini02 from './assets/projects/Screenshot_20260509_171304.jpg'
import yishengMini03 from './assets/projects/Screenshot_2026_0509_171333.jpg'
import yishengMini04 from './assets/projects/Screenshot_20260509_170810.jpg'
import yishengMini05 from './assets/projects/Screenshot_2026_0509_171218.jpg'
import aiDaily01 from './assets/projects/QQ20260508-214432.png'
import aiDaily02 from './assets/projects/QQ20260508-214510.png'
import aiDaily03 from './assets/projects/QQ20260508-214632.png'
import aiDaily04 from './assets/projects/QQ20260508-214719.png'
import aiDailyPoster from './assets/projects/2026.5.08_1.png'
import aiDailyPoster02 from './assets/projects/2026.5.08_2.png'
import aiDailyPoster05 from './assets/projects/2026.5.08_5.png'
import cropHealth01 from './assets/projects/QQ20260508-231543.png'
import cropHealth02 from './assets/projects/QQ20260508-231740.png'
import cropHealth03 from './assets/projects/QQ20260508-231955.png'

const profile = {
  name: '陈佳莹',
  role: '数据科学与大数据技术本科 · 全栈开发 / 后端开发',
  location: '中国 · 北京',
  email: '2650622341@qq.com',
  blog: 'blog.csdn.net/2401_84284464',
  summary:
    '具备 Java、Rust 后端项目实践经验，参与过 AI 行业资讯自动化日报系统、大健康门店系统、智能社区管理系统、计算机视觉系统。关注后端工程、AI 应用落地与数据智能方向。',
}

const highlights = [
  { label: '专业排名', value: '前 5%' },
  { label: '博客文章', value: '160+' },
  { label: '阅读量', value: '15w+' },
]

const highlightTargets = [5, 160, 15]

const skills = [
  {
    title: '后端开发',
    items: ['Java', 'SpringBoot', 'SSM', 'MyBatis', 'MyBatis-Plus', 'JWT', 'RBAC', 'RESTful API'],
  },
  {
    title: 'Rust 与异步服务',
    items: ['Rust', 'Axum', 'SQLx', 'Tokio', 'Serde', 'PostgreSQL', '微信小程序 API', '企业微信 API'],
  },
  {
    title: 'AI 与数据智能',
    items: ['Python', 'PyTorch', 'YOLOv8', 'CNN', 'RAG', 'Agent RAG', 'MCP', 'LlamaIndex', 'Embedding', 'Prompt'],
  },
  {
    title: '前端联调与工程化',
    items: ['Vue3', 'TypeScript', 'Taro', 'ECharts', 'MySQL', 'Redis', 'RediSearch', 'Git', 'Linux', 'Docker', 'Nginx', 'Kubernetes'],
  },
]

const projects = [
  {
    name: '颐生悦大健康智能管理系统',
    stack: 'Rust · Axum · SQLx · PostgreSQL · Vue3 · Taro',
    description:
      '颐生悦大健康智能管理系统面向美业/大健康门店经营场景，采用 Rust 后端服务 + PostgreSQL 数据库 + 多端前端协同的技术方案，建设管理端 admin-web、企业微信员工端 staff-app、微信小程序顾客端 user-mini 三端体系。系统覆盖客户档案、员工管理、预约排班、服务履约、开单支付、卡项权益、库存商品、护理日志、回访跟进、员工业绩统计等核心业务闭环。',
    mediaGroups: [
      {
        id: 'admin',
        tabLabel: '管理端',
        title: '管理端 admin-web',
        note: '门店经营工作台、开单交易、客户档案、服务履约与数据概览',
        kind: 'desktop',
        images: [
          yishengAdmin01,
          yishengAdmin02,
          yishengAdmin03,
          yishengAdmin04,
          yishengAdmin05,
          yishengAdmin06,
        ],
      },
      {
        id: 'staff',
        tabLabel: '企业微信员工端',
        title: '企业微信员工端 staff-app',
        note: '预约执行、客户跟进、服务履约与客户资产查看',
        kind: 'mobile',
        images: [yishengStaff01, yishengStaff02, yishengStaff03, yishengStaff04, yishengStaff05],
      },
      {
        id: 'mini',
        tabLabel: '微信小程序顾客端',
        title: '微信小程序顾客端 user-mini',
        note: '会员权益、订单确认、快捷预约与健康档案入口',
        kind: 'mobile',
        images: [yishengMini01, yishengMini02, yishengMini03, yishengMini04, yishengMini05],
      },
    ],
    details: [
      '数据库设计与业务建模：根据颐生悦大健康门店业务需求，梳理各核心业务对象，设计并完善 PostgreSQL 表结构；围绕业务闭环设计外键关联、状态字段、时间字段、金额字段、JSONB 快照字段、业务流水表等，保证数据可追溯、可统计、可扩展（该项目共维护了47张表结构数据）；',
      '后端接口与业务流程开发：基于 Rust 后端技术栈完成多个业务域接口开发，拆分各个模块，实现各个核心接口；根据管理端、员工端、小程序端的不同使用场景设计请求参数、响应结构、分页模型和状态流转逻辑；',
      '数据库交互与事务一致性处理：使用 SQLx 编写复杂 SQL 查询与数据写入逻辑，完成多表关联查询、分页筛选、详情聚合、统计汇总等功能；在预约新增、服务项目调整、支付确认、卡项划扣、库存出入库、客户资产流水写入等场景中处理多表联动，通过事务保证预约单、服务单、订单、资产流水、库存流水、护理记录、回访记录等数据的一致性；',
      '服务履约闭环开发：参与实现从“预约创建 - 技师排期 - 到店核销 - 服务开始 - 项目调整 - 发送客户确认 - 服务完成 - 支付确认 - 护理/回访记录生成”的完整服务流程；支持预约拖拽改期、取消、爽约、临时预约标记、服务项目增删改、服务变更日志记录等功能，使员工端能够完整承接门店实际服务执行场景；',
      '开单交易与客户资产模块开发：参与开发开单流程、订单明细计算、优惠券设置、支付方式选择、客户确认、订单取消、支付处理、业绩分配等逻辑；支持储值卡、次卡、时间卡等不同卡项权益的消费划扣，写入客户资产流水，并联动员工业绩统计、客户消费记录和小程序端待确认订单展示；',
      '商品库存与卡项管理开发：参与商品档案、服务项目、卡项模板、门店库存、入库、出库、盘点调整、库存流水查询等功能开发；根据不同业务类型生成入库/出库单据编号，校验库存数量、赠品出库权限和盘亏数量，确保商品售卖、赠送、服务消耗等场景下库存数据准确流转；',
      '三端接口联调与前端适配：配合 admin-web 管理端、staff-app 企业微信员工端、user-mini 微信小程序顾客端完成接口联调，修改前端请求路径、请求参数、类型定义和 Store 数据适配逻辑；根据后端实际返回结构调整页面数据展示，保证数据的一致性；',
      '前端页面与样式调整：参与修改 Vue/Taro 页面交互和样式细节，完善管理端表格、筛选、弹窗、表单、状态标签等展示效果；调整员工端移动页面和小程序端卡片、列表、按钮、提醒入口等样式，使业务数据能够在不同端清晰展示，并提升门店员工和顾客的实际使用体验；',
      '第三方能力接入：微信小程序手机号登录、企业微信登录/通讯录同步等能力对接，处理 access_token 获取、缓存、刷新、用户信息解析、JWT 生成等流程，实现顾客端登录识别会员档案、员工端通过企业微信进入系统的基础能力；',
      '项目维护与问题排查：参与后续接口维护、字段调整、业务规则变更和 Bug 修复，针对前后端联调中出现的字段不一致、状态流转异常、金额计算偏差、分页查询错误、数据为空、样式错位等问题进行定位和修复；根据测试反馈持续完善数据库字段、后端逻辑、接口返回和前端展示，保障系统从开发到联调阶段稳定推进。',
    ],
  },
  {
    name: '面向 AI 行业资讯生产分发与审核场景的自动化日报系统',
    stack:
      'VVue 3 · pgvector · SQLx · RAG · Rust · Cargo Workspace · JWT · Embedding · 通义千问、DeepSeek、DashScope',
    description:
      '本项目面向 AI 行业资讯生产分发与审核场景，围绕“采集、理解、筛选、整理、审核、发布”完整链路构建自动化日报系统。系统支持从新闻网站、ProductHunt、Newsletter 邮件、X/Twitter、n8n 推送等渠道获取原始信息，并通过解析清洗、翻译、AI 相关性判断、摘要压缩、核心事实提取、分类评分、向量化检索和自动审核，提升日报内容密度与发布效率。',
    mediaGroups: [
      {
        id: 'ai-daily-poster',
        tabLabel: '日报成品',
        title: '公众号日报成品图',
        note: '自动生成后的公众号日报内容预览与发布物料',
        kind: 'poster',
        images: [aiDailyPoster, aiDailyPoster02, aiDailyPoster05],
      },
      {
        id: 'ai-daily',
        tabLabel: '日报系统',
        title: 'AI 行业资讯自动化日报系统',
        note: '资讯采集、候选召回、向量去重、AI 审核、人工复核与发布管理',
        kind: 'desktop',
        images: [aiDaily03, aiDaily02, aiDaily01, aiDaily04],
      },
    ],
    details: [
      '日报内容生成模块：负责日报内容从候选资讯到最终稿件的自动生成流程。调用大模型提取每条资讯的核心事实，重点识别事件主体、关键动作、核心数据和行业影响。例如“某公司发布了什么产品”“某机构完成了多少融资”“某模型在哪些能力上取得进展”“某开源项目解决了什么问题”等。相比直接使用原文正文，核心事实更短、更聚焦，能够帮助系统更准确地判断资讯价值，避免标题相似但内容不同、正文冗长但重点不清的问题。',
      '向量化与去重模块：负责对处理后的资讯内容进行语义向量化和相似度去重。系统会将正文摘要、格式化内容、核心事实等文本转换为向量，并存入 pgvector 向量检索服务中，形成可检索的内容向量库。系统会使用当前内容向量与历史内容进行相似度检索，判断是否存在语义高度相似的资讯。查询时会结合时间窗口、相似度阈值、返回数量等参数，避免同一事件因来自不同媒体、不同标题或不同表达方式而被重复收录。该模块不仅用于简单的重复判断，也用于辅助内容质量控制。减少日报冗余，提高信息密度。',
      'AI 内容自动审核功能开发：负责构建 AI 自动审核与人工复核结合的内容审核流程。系统会在日报内容生成后，对每条日报条目进行智能检测，识别内容是否存在真实性不足、时效性不强、AI 相关性弱、表述不准确或需要修改删除等问题，并生成对应的审核原因和处理建议。在审核规则设计上，系统基于分级处置机制对内容进行状态标注，包括待审核、审核通过、已拦截、待复核等状态。不同状态对应不同处理路径，例如审核通过的内容可进入发布前确认流程，疑似问题内容进入人工复核，明显不符合要求的内容可被拦截。同时，开发了审核工作台的核心业务能力，包括审核状态标注、审核结论展示、问题原因记录、修改建议展示和审核结果保存。系统将 AI 智能检测结果与人工运营处理流程衔接起来，使运营人员能够快速定位问题内容，并根据审核建议进行修改、删除或确认。',
    ],
  },
  {
    name: '智能社区综合管理系统',
    stack: 'SpringBoot · MyBatis-Plus · Vue · MySQL · Redis',
    description:
      '参与物业与安保场景下的社区管理平台开发，负责 JWT 登录认证、SHA256 密码安全、Redis Token 管控、RBAC 权限模型、百度地图 API、人脸识别接口与 ECharts 可视化。',
    details: [
      '基于 JWT、SHA256 与 Redis 构建登录校验体系，实现身份核验、密码安全存储与 Token 管控。',
      '基于 RBAC 模型设计权限数据库结构，实现角色定义、权限分配、用户-角色关联与多角色权限控制。',
      '对接百度地图 API 实现小区位置定位与可视化展示，并接入腾讯大模型接口进行人脸识别辅助信息采集。',
      '完成 Excel 导入导出、文件上传、ECharts 图表展示等业务支撑功能。',
    ],
  },
  {
    name: '作物健康监测系统',
    stack: 'Python · PyTorch · YOLOv8 · CNN · Flask',
    description:
      '基于深度学习与计算机视觉的作物病害检测 Web 系统，主要面向农业生产中的作物叶片健康监测场景，支持马铃薯、番茄、玉米、大豆等多种作物的健康与病害类别识别。统能够对上传的作物叶片图片、视频文件以及浏览器摄像头实时画面进行智能分析，自动识别叶片中的病害类型，定位疑似病害区域，并以可视化形式展示检测结果。用户可以在 Web 页面中选择不同模型（YOLO、YOLO+CNN、YOLO+CNN+CBAM三个模型）进行检测，并查看检测框、类别名称、置信度、边界框坐标、归一化坐标以及处理后的检测图像。对于视频检测场景，系统支持上传视频后逐帧分析，输出带检测框的视频结果，并统计总帧数、检出帧数、总检测数量、类别出现次数、平均置信度和帧级检测详情。实时检测页面则通过浏览器摄像头采集画面，按固定时间间隔将视频帧提交给后端模型进行识别，并在页面中动态绘制检测结果和运行统计信息。 ',
    mediaGroups: [
      {
        id: 'crop-health',
        tabLabel: '检测系统',
        title: '作物健康监测系统',
        note: '图片病害检测、检测结果可视化与模型数据展示',
        kind: 'desktop',
        images: [cropHealth01, cropHealth02, cropHealth03],
      },
    ],
    details: [
      '系统整体设计与功能规划：梳理作物病害检测系统的整体业务流程，确定系统主要功能模块，包括用户登录注册、图片病害检测、视频病害检测、摄像头实时检测、模型数据展示等。根据项目需求设计前后端交互流程，使系统能够完成从图像输入、模型推理到结果展示的完整检测闭环。',
      '后端服务与接口开发：使用 Flask 搭建系统后端服务，完成页面路由、用户接口、检测接口、模型数据接口和视频处理接口的开发。后端主要负责接收前端上传的图片或视频数据，调用深度学习模型进行推理，并将检测类别、置信度、检测框坐标、处理后图像或视频等结果返回给前端。',
      '作物病害检测模型接入：YOLOv8、YOLOv8 + CNN、YOLOv8 + CBAM-CNN 三类模型分别进行设计、训练并将模型最终方案接入系统。YOLOv8 用于完成病害区域定位和初步分类，两阶段模型则在 YOLO 检测的基础上进一步裁剪病害区域，并通过 CNN 或 CBAM-CNN 分类器进行更精细的病害识别，提高系统对不同作物病害类别的区分能力。',
      '检测结果可视化与数据展示：包括在图片和视频帧中绘制病害检测框、显示病害类别和置信度，并统计视频检测中的总帧数、检出帧数、检测数量和类别分布等信息。同时负责读取模型训练和验证过程中生成的 CSV、JSON、图像等结果文件，用于展示训练曲线、验证指标、混淆矩阵和模型对比数据。',
    ],
  },
]

const activeProject = ref('')
const activeMediaTab = ref(projects[0].mediaGroups?.[0].id ?? '')
const activeSection = ref('about')
const isScrolled = ref(false)
const scrollProgress = ref(0)
const typedSummary = ref('')
const animatedStats = ref([0, 0, 0])
const cursorX = ref(0)
const cursorY = ref(0)
const cursorVisible = ref(false)
const previewImage = ref('')
const previewTitle = ref('')
const previewScale = ref(1)
const previewOffsetX = ref(0)
const previewOffsetY = ref(0)
const previewDisplayWidth = ref(0)
const previewDisplayHeight = ref(0)
const previewCanvasWidth = ref(0)
const previewCanvasHeight = ref(0)
const previewReady = ref(false)
const previewPageScrollY = ref(0)
const isPreviewDragging = ref(false)
const previewDragStart = ref({ x: 0, y: 0, scrollLeft: 0, scrollTop: 0 })
const previewImageRef = ref<HTMLImageElement | null>(null)
const previewCanvasRef = ref<HTMLElement | null>(null)
const lastPageScrollAt = ref(0)
const lastPointerMoveAt = ref(0)
const isProjectSwitching = ref(false)
const activeProjectHeight = ref(0)
const leavingProject = ref('')
const leavingMediaTab = ref('')
const leavingProjectFoldDirection = ref<'up' | 'down'>('down')
const leavingProjectHeight = ref(0)
const isLeavingProjectClosing = ref(false)
const projectSwitchSpacerProject = ref('')
const projectSwitchSpacerHeight = ref(0)
const isProjectSwitchSpacerOpen = ref(false)

function fitPreviewImage() {
  const image = previewImageRef.value
  const canvas = previewCanvasRef.value
  if (!image || !canvas || !image.naturalWidth || !image.naturalHeight) return

  const fit = getPreviewInitialScale()
  centerPreviewImage(fit)
  canvas.scrollTo({ left: 0, top: 0 })
  previewReady.value = true
}

function getCssPixelLimit(value: string, fallback: number) {
  const parsed = parseFloat(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function getPreviewCanvasLimits() {
  const canvas = previewCanvasRef.value
  if (!canvas) return { width: 0, height: 0, paddingX: 0, paddingY: 0 }

  const panel = canvas.closest('.image-preview-panel')
  const header = panel?.querySelector('header')
  const style = window.getComputedStyle(canvas)
  const paddingX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
  const paddingY = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
  const overlayPaddingX = window.innerWidth <= 560 ? 12 : 16
  const overlayPaddingY = window.innerWidth <= 560 ? 12 : 16
  const headerHeight = header instanceof HTMLElement ? Math.ceil(header.getBoundingClientRect().height) : 0
  const viewportWidthLimit = Math.max(180, window.innerWidth - overlayPaddingX - 2)
  const viewportHeightLimit = Math.max(180, window.innerHeight - overlayPaddingY - headerHeight - 2)
  const cssWidthLimit = getCssPixelLimit(style.maxWidth, viewportWidthLimit)
  const cssHeightLimit = getCssPixelLimit(style.maxHeight, viewportHeightLimit)

  return {
    width: Math.min(viewportWidthLimit, cssWidthLimit),
    height: Math.min(viewportHeightLimit, cssHeightLimit),
    paddingX,
    paddingY,
  }
}

function getPreviewFitScale() {
  const image = previewImageRef.value
  if (!image || !image.naturalWidth || !image.naturalHeight) return 1

  const limits = getPreviewCanvasLimits()
  const availableWidth = Math.max(1, limits.width - limits.paddingX)
  const availableHeight = Math.max(1, limits.height - limits.paddingY)

  return Math.min(1, availableWidth / image.naturalWidth, availableHeight / image.naturalHeight)
}

function getPreviewInitialScale() {
  return getPreviewFitScale()
}

function centerPreviewImage(scale = previewScale.value) {
  const image = previewImageRef.value
  if (!image || !image.naturalWidth || !image.naturalHeight) return

  const limits = getPreviewCanvasLimits()
  const nextWidth = Math.round(image.naturalWidth * scale)
  const nextHeight = Math.round(image.naturalHeight * scale)

  previewScale.value = scale
  previewDisplayWidth.value = nextWidth
  previewDisplayHeight.value = nextHeight
  previewCanvasWidth.value = Math.min(limits.width, nextWidth + limits.paddingX)
  previewCanvasHeight.value = Math.min(limits.height, nextHeight + limits.paddingY)

  const availableWidth = previewCanvasWidth.value - limits.paddingX
  const availableHeight = previewCanvasHeight.value - limits.paddingY
  previewOffsetX.value = Math.max(0, Math.round((availableWidth - previewDisplayWidth.value) / 2))
  previewOffsetY.value = Math.max(0, Math.round((availableHeight - previewDisplayHeight.value) / 2))
}

function getProjectIntro(projectName: string) {
  const project = projects.find((item) => item.name === projectName)
  return project?.details.find((detail) => detail.startsWith('项目简介')) ?? project?.description ?? ''
}

function getExperienceProjectIntro(item: { project: string; projectIntro?: string }) {
  return item.projectIntro ?? getProjectIntro(item.project)
}

function getProjectStack(projectName: string) {
  return projects.find((item) => item.name === projectName)?.stack ?? ''
}

function getDefaultMediaTab(projectName: string) {
  const project = projects.find((item) => item.name === projectName)
  const mediaGroups = project && 'mediaGroups' in project ? project.mediaGroups : undefined
  if (!mediaGroups?.length) return activeMediaTab.value
  return mediaGroups[0].id
}

function getProjectMediaTab(projectName: string) {
  if (activeProject.value === projectName) return activeMediaTab.value
  if (leavingProject.value === projectName) return leavingMediaTab.value || getDefaultMediaTab(projectName)
  return activeMediaTab.value
}

function isProjectMediaTabActive(projectName: string, groupId: string) {
  return getProjectMediaTab(projectName) === groupId
}

function openPreview(src: string, title: string, index: number) {
  previewPageScrollY.value = window.scrollY
  previewReady.value = false
  previewImage.value = src
  previewTitle.value = `${title}界面展示 ${index + 1}`
  previewScale.value = 1
  previewOffsetX.value = 0
  previewOffsetY.value = 0
  previewDisplayWidth.value = 0
  previewDisplayHeight.value = 0
  previewCanvasWidth.value = 0
  previewCanvasHeight.value = 0
}

function closePreview() {
  previewImage.value = ''
  previewTitle.value = ''
  previewScale.value = 1
  previewOffsetX.value = 0
  previewOffsetY.value = 0
  previewDisplayWidth.value = 0
  previewDisplayHeight.value = 0
  previewCanvasWidth.value = 0
  previewCanvasHeight.value = 0
  previewReady.value = false
  isPreviewDragging.value = false
  nextTick(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, previewPageScrollY.value)
    requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior
    })
  })
}

function zoomPreview(step: number, anchor?: { x: number; y: number }) {
  const canvas = previewCanvasRef.value
  const fitScale = getPreviewFitScale()
  const previousScale = previewScale.value
  const nextScale = Math.min(2.5, Math.max(fitScale, Number((previewScale.value + step).toFixed(2))))
  if (nextScale === previousScale) return

  const anchorX = canvas && anchor ? anchor.x - canvas.getBoundingClientRect().left + canvas.scrollLeft : 0
  const anchorY = canvas && anchor ? anchor.y - canvas.getBoundingClientRect().top + canvas.scrollTop : 0
  centerPreviewImage(nextScale)

  if (canvas && anchor && previousScale > 0) {
    const scaleRatio = nextScale / previousScale
    canvas.scrollLeft = anchorX * scaleRatio - (anchor.x - canvas.getBoundingClientRect().left)
    canvas.scrollTop = anchorY * scaleRatio - (anchor.y - canvas.getBoundingClientRect().top)
  }
}

function handlePreviewWheel(event: WheelEvent) {
  const canvas = previewCanvasRef.value
  const canScroll =
    canvas && (canvas.scrollHeight > canvas.clientHeight + 1 || canvas.scrollWidth > canvas.clientWidth + 1)
  if (canScroll && !event.ctrlKey && !event.metaKey) return

  event.preventDefault()
  zoomPreview(event.deltaY > 0 ? -0.1 : 0.1, { x: event.clientX, y: event.clientY })
}

function startPreviewDrag(event: PointerEvent) {
  const canvas = event.currentTarget as HTMLElement
  const canScroll = canvas.scrollHeight > canvas.clientHeight + 1 || canvas.scrollWidth > canvas.clientWidth + 1
  if (!canScroll && previewScale.value < 1) return

  isPreviewDragging.value = true
  previewDragStart.value = {
    x: event.clientX,
    y: event.clientY,
    scrollLeft: canvas.scrollLeft,
    scrollTop: canvas.scrollTop,
  }
  canvas.setPointerCapture(event.pointerId)
}

function movePreviewDrag(event: PointerEvent) {
  if (!isPreviewDragging.value) return
  const canvas = event.currentTarget as HTMLElement
  canvas.scrollLeft = previewDragStart.value.scrollLeft - (event.clientX - previewDragStart.value.x)
  canvas.scrollTop = previewDragStart.value.scrollTop - (event.clientY - previewDragStart.value.y)
}

function stopPreviewDrag(event: PointerEvent) {
  if (!isPreviewDragging.value) return
  isPreviewDragging.value = false
  ;(event.currentTarget as HTMLElement).releasePointerCapture(event.pointerId)
}

const experience = [
  {
    time: '2026.02 - 2026.05',
    company: '北京云铸科技有限公司',
    role: 'AI 全栈开发',
    summary:
      '参与大健康智能管理系统从需求拆解、数据库建模、后端接口开发到三端联调的完整开发流程，负责 Rust 后端、PostgreSQL 数据交互、前端接口适配和页面样式调整。',
    project: '颐生悦大健康智能管理系统',
    projectIntro:
      '全程完整参与颐生悦大健康智能管理系统从 0 到 1 搭建，项目面向美业/大健康门店经营场景，采用 Rust 后端服务 + PostgreSQL 数据库 + 多端前端协同的技术方案，并遵循公司内部统一的项目架构与开发规范进行模块拆分、接口开发、数据交互和三端联调，建设管理端 admin-web、企业微信员工端 staff-app、微信小程序顾客端 user-mini 三端体系。深度参与数据库设计、后端接口开发、SQL 数据交互、前端接口适配、页面样式调整、联调测试与后续维护，开发过程中结合 VibeCoding 方式提升需求拆解、代码实现与迭代效率，并使用阿里云 Codeup 进行代码托管、分支管理、版本提交和团队协作，推动项目从需求拆解到功能落地的完整开发与后期维护。',
  },
  {
    time: '2025.01 - 2025.03',
    company: '瑞泽科技（河北）有限公司',
    role: 'Java 后端开发',
    summary:
      '参与物业与安保场景下的智能社区综合管理系统开发，负责登录认证、权限控制、第三方接口对接、文件上传和数据可视化等模块。',
    project: '智能社区综合管理系统',
    projectIntro:
      '在实习中主要跟进社区管理平台的基础业务模块，围绕用户登录、权限判断、数据维护和可视化展示补齐后端接口能力，提升系统日常管理效率。',
  },
]

const awards = [
  '美国大学生数学建模竞赛 MCM/ICM H 奖',
  '2025 年第七届中青杯数学建模大赛国家级三等奖',
  '2025 年第十届数维杯数学建模大赛国家级三等奖',
  '2024-2025 第二学期校级一等奖学金',
  '2024-2025 第一学期校级二等奖学金',
]

const practices = [
  {
    time: '2024.09 - 2025.12',
    title: '校长跑队干事',
    detail: '负责长跑队日常训练组织、队员沟通与训练节奏协调，在团队管理、目标推进和持续自律方面积累了实践经验。',
  },
  {
    time: '2023.03 - 2025.12',
    title: '校田径队队员',
    detail: '长期参与校田径队训练与赛事活动，具备良好的体能基础、抗压能力和团队协作意识。',
  },
]

let scrollListener: (() => void) | undefined
let cursorListener: ((event: PointerEvent) => void) | undefined
let sectionObserver: IntersectionObserver | undefined
let revealObserver: IntersectionObserver | undefined
let counterObserver: IntersectionObserver | undefined
let typeTimer: number | undefined
let projectSwitchTimer: number | undefined
let projectSwitchStartTimer: number | undefined
let projectSwitchStartFrame: number | undefined
let projectCloseTimer: number | undefined
let projectCloseStartFrame: number | undefined
let projectPositionPinFrame: number | undefined
let projectHoverOpenTimer: number | undefined
let projectHoverCloseTimer: number | undefined
let scrollBehaviorRestoreFrame: number | undefined
let previousRootScrollBehavior: string | undefined
let isRootScrollBehaviorForced = false
let isProjectPositionPinned = false
let projectDetailResizeObserver: ResizeObserver | undefined
const recentProjectPointerMoveMs = 120
const projectDetailAnimationMs = 540
const projectDetailCleanupMs = projectDetailAnimationMs + 120

function formatHighlight(value: number, index: number) {
  if (index === 0) return `前 ${Math.round(value)}%`
  if (index === 1) return `${Math.round(value)}+`
  return `${Math.round(value)}w+`
}

function animateCounters() {
  const start = performance.now()
  const duration = 1400

  function tick(now: number) {
    const progress = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - progress, 3)
    animatedStats.value = highlightTargets.map((target) => target * eased)
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

function startTypewriter() {
  const text = profile.summary
  typedSummary.value = ''
  let index = 0
  typeTimer = window.setInterval(() => {
    typedSummary.value = text.slice(0, index)
    index += 1
    if (index > text.length && typeTimer) window.clearInterval(typeTimer)
  }, 28)
}

function updateTilt(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = (event.clientX - rect.left) / rect.width - 0.5
  const y = (event.clientY - rect.top) / rect.height - 0.5
  target.style.setProperty('--tilt-x', `${(-y * 10).toFixed(2)}deg`)
  target.style.setProperty('--tilt-y', `${(x * 12).toFixed(2)}deg`)
  target.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
  target.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
}

function resetTilt(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement
  target.style.setProperty('--tilt-x', '0deg')
  target.style.setProperty('--tilt-y', '0deg')
}

function forceInstantPageScroll() {
  const root = document.documentElement
  if (scrollBehaviorRestoreFrame) {
    window.cancelAnimationFrame(scrollBehaviorRestoreFrame)
    scrollBehaviorRestoreFrame = undefined
  }
  if (!isRootScrollBehaviorForced) {
    previousRootScrollBehavior = root.style.scrollBehavior
    isRootScrollBehaviorForced = true
  }
  root.style.scrollBehavior = 'auto'
}

function restorePageScrollBehaviorSoon() {
  if (isProjectPositionPinned) return
  if (scrollBehaviorRestoreFrame) window.cancelAnimationFrame(scrollBehaviorRestoreFrame)
  scrollBehaviorRestoreFrame = requestAnimationFrame(() => {
    document.documentElement.style.scrollBehavior = previousRootScrollBehavior ?? ''
    previousRootScrollBehavior = undefined
    isRootScrollBehaviorForced = false
    scrollBehaviorRestoreFrame = undefined
  })
}

function adjustPageScrollInstant(offset: number) {
  const stableOffset = Math.round(offset)
  if (Math.abs(stableOffset) < 1) return
  forceInstantPageScroll()
  window.scrollBy(0, stableOffset)
}

function isStationaryProjectPointerTransition(event: PointerEvent) {
  if (!cursorVisible.value) return false
  if (performance.now() - lastPointerMoveAt.value < recentProjectPointerMoveMs) return false
  const pointerDelta = Math.hypot(event.clientX - cursorX.value, event.clientY - cursorY.value)
  const eventMovement = Math.hypot(event.movementX, event.movementY)
  return pointerDelta < 0.5 && eventMovement < 0.5
}

function stopProjectPositionPin() {
  if (projectPositionPinFrame) {
    window.cancelAnimationFrame(projectPositionPinFrame)
    projectPositionPinFrame = undefined
  }
  isProjectPositionPinned = false
  restorePageScrollBehaviorSoon()
}

function pinProjectCardPosition(
  card: HTMLElement | undefined,
  anchor: number | undefined,
  duration = 760,
  edge: 'top' | 'bottom' = 'top',
  options: { allowUserScroll?: boolean } = {},
) {
  if (!card || anchor === undefined) return
  if (projectPositionPinFrame) window.cancelAnimationFrame(projectPositionPinFrame)

  forceInstantPageScroll()
  isProjectPositionPinned = true
  const startedAt = performance.now()
  let targetAnchor = anchor
  let lastScrollY = window.scrollY

  const keepPinned = (now: number) => {
    if (options.allowUserScroll) {
      targetAnchor -= window.scrollY - lastScrollY
    }

    const rect = card.getBoundingClientRect()
    const current = edge === 'bottom' ? rect.bottom : rect.top
    const delta = current - targetAnchor
    const stableDelta = delta > 0 ? Math.floor(delta - 0.5) : Math.ceil(delta + 0.5)
    if (Math.abs(stableDelta) >= 1) {
      window.scrollBy(0, stableDelta)
    }
    lastScrollY = window.scrollY

    if (now - startedAt < duration) {
      projectPositionPinFrame = window.requestAnimationFrame(keepPinned)
      return
    }

    projectPositionPinFrame = undefined
    isProjectPositionPinned = false
    restorePageScrollBehaviorSoon()
  }

  projectPositionPinFrame = window.requestAnimationFrame(keepPinned)
}

function getOpenProjectDetailMetrics() {
  const detail = document.querySelector('.project-card.is-active .project-detail.is-open')
  if (!(detail instanceof HTMLElement)) return { height: 0, flowHeight: 0 }
  const style = window.getComputedStyle(detail)
  const marginY = parseFloat(style.marginTop) + parseFloat(style.marginBottom)

  return {
    height: detail.offsetHeight,
    flowHeight: detail.offsetHeight + marginY,
  }
}

function measureProjectDetailHeight(detail: HTMLElement) {
  const inner = detail.querySelector('.project-detail-inner')
  const style = window.getComputedStyle(detail)
  const paddingY = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
  const innerHeight =
    inner instanceof HTMLElement ? Math.max(inner.scrollHeight, inner.getBoundingClientRect().height) : 0

  return Math.ceil(innerHeight + paddingY + 4)
}

function scheduleActiveProjectHeightSync() {
  nextTick(() => {
    syncActiveProjectHeight()
    requestAnimationFrame(syncActiveProjectHeight)
  })
}

function setActiveMediaTab(groupId: string) {
  if (activeMediaTab.value === groupId) return
  activeMediaTab.value = groupId
  scheduleActiveProjectHeightSync()
}

function handleMediaImageLoad(groupId: string) {
  if (activeMediaTab.value !== groupId) return
  scheduleActiveProjectHeightSync()
}

function syncActiveProjectHeight() {
  if (!activeProject.value) {
    activeProjectHeight.value = 0
    projectDetailResizeObserver?.disconnect()
    return
  }

  const detail = document.querySelector('.project-card.is-active .project-detail')
  if (!(detail instanceof HTMLElement)) return
  activeProjectHeight.value = measureProjectDetailHeight(detail)
}

function observeActiveProjectDetail() {
  projectDetailResizeObserver?.disconnect()
  if (!activeProject.value) return

  const detail = document.querySelector('.project-card.is-active .project-detail')
  const inner = detail?.querySelector('.project-detail-inner')
  if (!(detail instanceof HTMLElement) || !(inner instanceof HTMLElement)) return

  activeProjectHeight.value = measureProjectDetailHeight(detail)
  projectDetailResizeObserver = new ResizeObserver(() => {
    activeProjectHeight.value = measureProjectDetailHeight(detail)
  })
  projectDetailResizeObserver.observe(inner)
}

function getProjectDetailStyle(projectName: string) {
  if (activeProject.value === projectName) {
    return {
      '--active-detail-height': `${activeProjectHeight.value}px`,
    }
  }
  if (leavingProject.value !== projectName) return undefined
  return {
    '--leaving-height': `${isLeavingProjectClosing.value ? 0 : leavingProjectHeight.value}px`,
  }
}

function getProjectSwitchSpacerStyle(projectName: string) {
  if (projectSwitchSpacerProject.value !== projectName) return undefined

  return {
    '--switch-spacer-height': `${projectSwitchSpacerHeight.value}px`,
  }
}

function getProjectIndex(projectName: string) {
  return projects.findIndex((project) => project.name === projectName)
}

function getFoldDirectionTowardCard(
  previousProject: string,
  nextProject: string,
  nextCard?: HTMLElement,
): 'up' | 'down' {
  const previousCard = document.querySelector('.project-card.is-active')
  if (previousCard instanceof HTMLElement && nextCard) {
    const previousRect = previousCard.getBoundingClientRect()
    const nextRect = nextCard.getBoundingClientRect()
    const previousCenter = previousRect.top + previousRect.height / 2
    const nextCenter = nextRect.top + nextRect.height / 2
    return nextCenter >= previousCenter ? 'down' : 'up'
  }

  return getProjectIndex(nextProject) > getProjectIndex(previousProject) ? 'down' : 'up'
}

function cleanupProjectSwitch(card?: HTMLElement) {
  const topBeforeCleanup = card?.getBoundingClientRect().top

  isProjectSwitching.value = false
  leavingProject.value = ''
  leavingMediaTab.value = ''
  leavingProjectFoldDirection.value = 'down'
  leavingProjectHeight.value = 0
  isLeavingProjectClosing.value = false
  projectSwitchSpacerProject.value = ''
  projectSwitchSpacerHeight.value = 0
  isProjectSwitchSpacerOpen.value = false
  projectSwitchTimer = undefined

  if (card && topBeforeCleanup !== undefined) {
    nextTick(() => {
      const topAfterCleanup = card.getBoundingClientRect().top
      adjustPageScrollInstant(topAfterCleanup - topBeforeCleanup)
      pinProjectCardPosition(card, topBeforeCleanup, 140)
    })
  }
}

function clearProjectCloseTimers() {
  if (projectCloseTimer) {
    window.clearTimeout(projectCloseTimer)
    projectCloseTimer = undefined
  }
  if (projectCloseStartFrame) {
    window.cancelAnimationFrame(projectCloseStartFrame)
    projectCloseStartFrame = undefined
  }
}

function openProject(
  projectName: string,
  event?: Event,
  options: { keepPosition?: boolean; anchor?: HTMLElement } = { keepPosition: true },
) {
  if (activeProject.value === projectName) return
  const source = options.anchor ?? (event?.currentTarget instanceof HTMLElement ? event.currentTarget : undefined)
  const closestCard = source?.closest('.project-card')
  const card = closestCard instanceof HTMLElement ? closestCard : source
  const topBeforeOpen = options.keepPosition ? card?.getBoundingClientRect().top : undefined
  const previousProject = activeProject.value
  const previousMediaTab = activeMediaTab.value
  const shouldSwitchProjects = Boolean(previousProject && previousProject !== projectName)
  const foldDirection = shouldSwitchProjects
    ? getFoldDirectionTowardCard(previousProject, projectName, card)
    : 'down'

  if (shouldSwitchProjects) {
    if (projectSwitchTimer) {
      window.clearTimeout(projectSwitchTimer)
      projectSwitchTimer = undefined
    }
    if (projectSwitchStartTimer) {
      window.clearTimeout(projectSwitchStartTimer)
      projectSwitchStartTimer = undefined
    }
    if (projectSwitchStartFrame) {
      window.cancelAnimationFrame(projectSwitchStartFrame)
      projectSwitchStartFrame = undefined
    }
    clearProjectCloseTimers()
    const previousDetail = getOpenProjectDetailMetrics()
    leavingProject.value = previousProject
    leavingMediaTab.value = previousMediaTab || getDefaultMediaTab(previousProject)
    leavingProjectFoldDirection.value = foldDirection
    leavingProjectHeight.value = previousDetail.height
    isLeavingProjectClosing.value = false
    isProjectSwitching.value = true
    projectSwitchSpacerProject.value = ''
    projectSwitchSpacerHeight.value = 0
    isProjectSwitchSpacerOpen.value = false
  } else {
    clearProjectCloseTimers()
    leavingProject.value = ''
    leavingMediaTab.value = ''
    leavingProjectFoldDirection.value = 'down'
    leavingProjectHeight.value = 0
    isLeavingProjectClosing.value = false
    projectSwitchSpacerProject.value = ''
    projectSwitchSpacerHeight.value = 0
    isProjectSwitchSpacerOpen.value = false
  }

  activeProjectHeight.value = 0
  activeProject.value = projectName
  activeMediaTab.value = getDefaultMediaTab(projectName)

  nextTick(() => {
    syncActiveProjectHeight()
    requestAnimationFrame(observeActiveProjectDetail)
    if (shouldSwitchProjects) {
      projectSwitchStartTimer = window.setTimeout(() => {
        projectSwitchStartTimer = undefined
        projectSwitchStartFrame = requestAnimationFrame(() => {
          isLeavingProjectClosing.value = true
          isProjectSwitchSpacerOpen.value = false
          projectSwitchStartFrame = undefined
        })
      }, 40)
    }
    if (card && topBeforeOpen !== undefined) {
      const topAfterOpen = card.getBoundingClientRect().top
      adjustPageScrollInstant(topAfterOpen - topBeforeOpen)
      pinProjectCardPosition(card, topBeforeOpen, shouldSwitchProjects ? projectDetailAnimationMs + 100 : 300)
    }
    if (shouldSwitchProjects) {
      projectSwitchTimer = window.setTimeout(() => {
        cleanupProjectSwitch(card)
      }, projectDetailCleanupMs)
    }
  })
}

function openProjectByPointer(projectName: string, event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  if (projectHoverCloseTimer) {
    window.clearTimeout(projectHoverCloseTimer)
    projectHoverCloseTimer = undefined
  }
  if (projectHoverOpenTimer) window.clearTimeout(projectHoverOpenTimer)

  const card = event.currentTarget instanceof HTMLElement ? event.currentTarget : undefined
  projectHoverOpenTimer = window.setTimeout(() => {
    projectHoverOpenTimer = undefined
    if (!card?.matches(':hover')) return
    openProject(projectName, undefined, { keepPosition: true, anchor: card })
  }, 35)
}

function closeProjectByPointer(projectName: string, event: PointerEvent) {
  if (event.pointerType !== 'mouse') return
  if (isStationaryProjectPointerTransition(event)) return
  if (projectHoverOpenTimer) {
    window.clearTimeout(projectHoverOpenTimer)
    projectHoverOpenTimer = undefined
  }
  const nextTarget = event.relatedTarget instanceof HTMLElement ? event.relatedTarget : undefined
  if (nextTarget?.closest('.project-card')) return
  const card = event.currentTarget instanceof HTMLElement ? event.currentTarget : undefined
  if (projectHoverCloseTimer) window.clearTimeout(projectHoverCloseTimer)

  projectHoverCloseTimer = window.setTimeout(() => {
    projectHoverCloseTimer = undefined
    if (card?.matches(':hover')) return
    closeProject(projectName, { force: true, anchor: card, lockEdge: 'top' })
  }, 180)
}

function openProjectByFocus(projectName: string, event: FocusEvent) {
  const target = event.target instanceof HTMLElement ? event.target : undefined
  if (target?.closest('.project-detail-button')) return
  openProject(projectName, event)
}

function closeProject(
  projectName: string,
  options: { force?: boolean; anchor?: HTMLElement; lockEdge?: 'top' | 'bottom'; allowUserScroll?: boolean } = {},
) {
  if (previewImage.value) return
  if (!options.force && performance.now() - lastPageScrollAt.value < 220) return
  if (activeProject.value !== projectName) return
  const closestCard = options.anchor?.closest('.project-card')
  const card = closestCard instanceof HTMLElement ? closestCard : options.anchor
  const cardRectBeforeClose = card?.getBoundingClientRect()
  const lockEdge = options.lockEdge ?? 'top'
  const anchorBeforeClose =
    cardRectBeforeClose && lockEdge === 'bottom' ? cardRectBeforeClose.bottom : cardRectBeforeClose?.top
  const detailMetrics = getOpenProjectDetailMetrics()
  if (projectSwitchTimer) {
    window.clearTimeout(projectSwitchTimer)
    projectSwitchTimer = undefined
  }
  if (projectSwitchStartTimer) {
    window.clearTimeout(projectSwitchStartTimer)
    projectSwitchStartTimer = undefined
  }
  if (projectSwitchStartFrame) {
    window.cancelAnimationFrame(projectSwitchStartFrame)
    projectSwitchStartFrame = undefined
  }
  clearProjectCloseTimers()
  stopProjectPositionPin()

  leavingProject.value = projectName
  leavingMediaTab.value = activeMediaTab.value || getDefaultMediaTab(projectName)
  leavingProjectFoldDirection.value = lockEdge === 'bottom' ? 'down' : 'up'
  leavingProjectHeight.value = detailMetrics.height
  isLeavingProjectClosing.value = false
  activeProject.value = ''
  activeProjectHeight.value = 0
  isProjectSwitching.value = false
  projectSwitchSpacerProject.value = ''
  projectSwitchSpacerHeight.value = 0
  isProjectSwitchSpacerOpen.value = false
  projectDetailResizeObserver?.disconnect()

  nextTick(() => {
    if (card && anchorBeforeClose !== undefined) {
      const rect = card.getBoundingClientRect()
      const current = lockEdge === 'bottom' ? rect.bottom : rect.top
      adjustPageScrollInstant(current - anchorBeforeClose)
      pinProjectCardPosition(card, anchorBeforeClose, projectDetailAnimationMs + 80, lockEdge)
    }

    projectCloseStartFrame = requestAnimationFrame(() => {
      isLeavingProjectClosing.value = true
      projectCloseStartFrame = undefined
    })

    projectCloseTimer = window.setTimeout(() => {
      leavingProject.value = ''
      leavingMediaTab.value = ''
      leavingProjectFoldDirection.value = 'down'
      leavingProjectHeight.value = 0
      isLeavingProjectClosing.value = false
      projectCloseTimer = undefined

      if (card && anchorBeforeClose !== undefined) {
        nextTick(() => {
          const rect = card.getBoundingClientRect()
          const current = lockEdge === 'bottom' ? rect.bottom : rect.top
          adjustPageScrollInstant(current - anchorBeforeClose)
          pinProjectCardPosition(card, anchorBeforeClose, 140, lockEdge)
        })
      }
    }, projectDetailCleanupMs)
  })
}

function toggleProject(projectName: string, event: Event) {
  if (activeProject.value === projectName) {
    const source = event.currentTarget instanceof HTMLElement ? event.currentTarget : undefined
    const card = source?.closest('.project-card')
    closeProject(projectName, { force: true, anchor: card instanceof HTMLElement ? card : source, lockEdge: 'top' })
    return
  }
  openProject(projectName, event)
}

onMounted(() => {
  scrollListener = () => {
    lastPageScrollAt.value = performance.now()
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0
    isScrolled.value = window.scrollY > 18
  }
  scrollListener()
  window.addEventListener('scroll', scrollListener, { passive: true })

  cursorListener = (event: PointerEvent) => {
    lastPointerMoveAt.value = performance.now()
    cursorX.value = event.clientX
    cursorY.value = event.clientY
    cursorVisible.value = true
  }
  window.addEventListener('pointermove', cursorListener, { passive: true })

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { rootMargin: '-42% 0px -48% 0px', threshold: 0 },
  )
  document.querySelectorAll('section[id]').forEach((section) => sectionObserver?.observe(section))

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  document.querySelectorAll('.reveal').forEach((item) => revealObserver?.observe(item))

  counterObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        animateCounters()
        counterObserver?.disconnect()
      }
    },
    { threshold: 0.35 },
  )
  const stats = document.querySelector('.stats-grid')
  if (stats) counterObserver.observe(stats)

  startTypewriter()
})

onBeforeUnmount(() => {
  if (scrollListener) window.removeEventListener('scroll', scrollListener)
  if (cursorListener) window.removeEventListener('pointermove', cursorListener)
  sectionObserver?.disconnect()
  revealObserver?.disconnect()
  counterObserver?.disconnect()
  projectDetailResizeObserver?.disconnect()
  if (typeTimer) window.clearInterval(typeTimer)
  if (projectSwitchTimer) window.clearTimeout(projectSwitchTimer)
  if (projectSwitchStartTimer) window.clearTimeout(projectSwitchStartTimer)
  if (projectSwitchStartFrame) window.cancelAnimationFrame(projectSwitchStartFrame)
  if (projectCloseTimer) window.clearTimeout(projectCloseTimer)
  if (projectCloseStartFrame) window.cancelAnimationFrame(projectCloseStartFrame)
  if (projectHoverOpenTimer) window.clearTimeout(projectHoverOpenTimer)
  if (projectHoverCloseTimer) window.clearTimeout(projectHoverCloseTimer)
  if (projectPositionPinFrame) window.cancelAnimationFrame(projectPositionPinFrame)
  if (scrollBehaviorRestoreFrame) {
    window.cancelAnimationFrame(scrollBehaviorRestoreFrame)
  }
  if (isRootScrollBehaviorForced) document.documentElement.style.scrollBehavior = previousRootScrollBehavior ?? ''
})
</script>

<template>
  <main class="resume-shell">
    <div
      class="cursor-glow"
      :class="{ 'is-visible': cursorVisible }"
      :style="{ transform: `translate3d(${cursorX}px, ${cursorY}px, 0)` }"
      aria-hidden="true"
    ></div>
    <nav class="topbar" :class="{ 'is-scrolled': isScrolled }" aria-label="页面导航">
      <div class="scroll-progress" :style="{ width: `${scrollProgress}%` }" aria-hidden="true"></div>
      <a href="#about">{{ profile.name }}</a>
      <div class="nav-links">
        <a href="#experience" :class="{ 'is-active': activeSection === 'experience' }">经历</a>
        <a href="#projects" :class="{ 'is-active': activeSection === 'projects' }">项目</a>
        <a href="#practice" :class="{ 'is-active': activeSection === 'practice' }">实践</a>
        <a href="#skills" :class="{ 'is-active': activeSection === 'skills' }">技能</a>
      </div>
    </nav>

    <section id="about" class="hero-section reveal">
      <div class="aurora-layer" aria-hidden="true"></div>
      <div class="particle-field" aria-hidden="true">
        <span v-for="index in 28" :key="index"></span>
      </div>
      <div class="hero-copy">
        <h1>{{ profile.name }}</h1>
        <p class="role">{{ profile.role }}</p>
        <p class="summary typewriter">{{ typedSummary }}</p>
        <div class="stats-grid hero-stats">
          <div v-for="(item, index) in highlights" :key="item.label">
            <strong>{{ formatHighlight(animatedStats[index], index) }}</strong>
            <span>{{ item.label }}</span>
          </div>
        </div>
        <div class="hero-actions" aria-label="主要操作">
          <a :href="`mailto:${profile.email}`" class="primary-action">
            <span class="action-icon" aria-hidden="true">@</span>
            <span>邮箱</span>
            <strong>{{ profile.email }}</strong>
          </a>
          <a href="https://blog.csdn.net/2401_84284464" class="secondary-action" target="_blank" rel="noreferrer">
            <span class="action-icon" aria-hidden="true">↗</span>
            <span>博客</span>
            <strong>{{ profile.blog }}</strong>
          </a>
        </div>
      </div>

      <aside class="profile-panel" aria-label="个人概览">
        <img class="avatar" :src="profilePhoto" alt="陈佳莹证件照" />
        <div>
          <span class="panel-label">方向</span>
          <strong>AI 全栈 / Java 后端 / Rust 后端</strong>
        </div>
        <div>
          <span class="panel-label">所在地</span>
          <strong>{{ profile.location }}</strong>
        </div>
      </aside>
    </section>

    <section class="content-band education-band reveal">
      <div class="section-heading">
        <p class="eyebrow">Education</p>
        <h2>教育背景</h2>
      </div>
      <div class="education-layout">
        <article class="education-card reveal tilt-card" @mousemove="updateTilt" @mouseleave="resetTilt">
          <div class="education-card-top">
            <p class="date-range">2022.09 - 2026.06</p>
            <span>本科</span>
          </div>
          <h3>河北金融学院 · 数据科学与大数据技术</h3>
          <p class="education-summary">
            围绕数据建模、智能算法与工程实践建立系统训练，持续把课堂知识转化为可落地的后端开发和 AI 应用能力。
          </p>
          <div class="education-focus" aria-label="课程方向">
            <span>机器学习</span>
            <span>深度学习</span>
            <span>NLP</span>
            <span>数据可视化</span>
            <span>数据库系统</span>
            <span>Linux</span>
          </div>
        </article>
        <article class="award-card reveal">
          <div class="award-card-header">
            <span>Honors</span>
            <h3>荣誉奖项</h3>
          </div>
          <ul>
            <li v-for="award in awards" :key="award">{{ award }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="experience" class="content-band timeline-band reveal">
      <div class="section-heading">
        <p class="eyebrow">Growth Path</p>
        <h2>实习经历</h2>
      </div>
      <div class="timeline">
        <article
          v-for="item in experience"
          :key="item.company"
          class="timeline-item reveal tilt-card"
          @mousemove="updateTilt"
          @mouseleave="resetTilt"
        >
          <div class="timeline-meta">
            <time>{{ item.time }}</time>
            <span>{{ item.role }}</span>
          </div>
          <div class="timeline-content">
            <h3>{{ item.company }}</h3>
            <p>{{ item.summary }}</p>
            <div class="linked-project">
              <span>对应项目</span>
              <strong>{{ item.project }}</strong>
              <p class="linked-project-stack">{{ getProjectStack(item.project) }}</p>
              <p class="linked-project-intro">{{ getExperienceProjectIntro(item) }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="projects" class="content-band reveal">
      <div class="section-heading">
        <p class="eyebrow">Selected Work</p>
        <h2>项目经历</h2>
      </div>
      <p class="section-hint">悬浮卡片或点击按钮即可查看详情</p>
      <div class="project-list" :class="{ 'is-switching': isProjectSwitching }">
        <template v-for="project in projects" :key="project.name">
        <div
          v-if="projectSwitchSpacerProject === project.name"
          class="project-switch-spacer"
          :class="{ 'is-open': isProjectSwitchSpacerOpen }"
          :style="getProjectSwitchSpacerStyle(project.name)"
          aria-hidden="true"
        ></div>
        <article
            class="project-card"
            :class="{ 'is-active': activeProject === project.name }"
            tabindex="0"
            @pointerenter="openProjectByPointer(project.name, $event)"
            @pointerleave="closeProjectByPointer(project.name, $event)"
            @focusin="openProjectByFocus(project.name, $event)"
            @click="openProject(project.name, $event)"
          >
          <div class="project-summary">
            <span>
              <h3>{{ project.name }}</h3>
              <p class="stack">{{ project.stack }}</p>
            </span>
            <button
              class="project-detail-button"
              :class="{ 'is-open': activeProject === project.name }"
              type="button"
              :aria-expanded="activeProject === project.name"
              :aria-label="activeProject === project.name ? '收起' : '点击查看详情'"
              @click.stop="toggleProject(project.name, $event)"
            >
              <span class="project-detail-button-label" aria-hidden="true">
                <span class="project-detail-button-text is-detail">点击查看详情</span>
                <span class="project-detail-button-text is-collapse">收起</span>
              </span>
              <span class="project-detail-button-icon" aria-hidden="true"></span>
            </button>
          </div>
          <p>{{ project.description }}</p>
          <div
            class="project-detail"
            :class="{
              'is-open': activeProject === project.name,
              'is-leaving': leavingProject === project.name && activeProject !== project.name,
              'is-fold-down':
                leavingProject === project.name &&
                activeProject !== project.name &&
                leavingProjectFoldDirection === 'down',
              'is-fold-up':
                leavingProject === project.name &&
                activeProject !== project.name &&
                leavingProjectFoldDirection === 'up',
              'is-leaving-closing':
                leavingProject === project.name && activeProject !== project.name && isLeavingProjectClosing,
            }"
            :style="getProjectDetailStyle(project.name)"
          >
            <div class="project-detail-inner">
            <div
              v-if="'mediaGroups' in project"
              class="project-media"
              :class="{ 'is-single-media': project.mediaGroups?.length === 1 }"
            >
              <div v-if="(project.mediaGroups?.length ?? 0) > 1" class="project-media-switch">
                <div class="project-media-guide">
                  <strong>界面展示</strong>
                  <span>点击右侧端类型切换对应截图</span>
                </div>
                <div class="project-media-tabs" role="tablist" :aria-label="`${project.name}界面展示`">
                  <button
                    v-for="group in project.mediaGroups"
                    :key="group.id"
                    type="button"
                    role="tab"
                    :aria-selected="isProjectMediaTabActive(project.name, group.id)"
                    :class="{ 'is-active': isProjectMediaTabActive(project.name, group.id) }"
                    @click.stop="setActiveMediaTab(group.id)"
                  >
                    <span class="tab-title">{{ group.tabLabel }}</span>
                    <span class="tab-note">{{ group.images.length }} 张界面展示</span>
                  </button>
                </div>
              </div>
              <section
                v-for="group in project.mediaGroups"
                :key="group.title"
                class="project-media-group"
                :class="`is-${group.kind}`"
                v-show="isProjectMediaTabActive(project.name, group.id)"
              >
                <header v-if="(project.mediaGroups?.length ?? 0) > 1">
                  <strong>{{ group.title }}</strong>
                  <span>{{ group.note }}</span>
                </header>
                <div class="project-media-grid">
                  <figure
                    v-for="(src, index) in group.images"
                    :key="src"
                    :class="{ 'is-featured': index === 0 }"
                  >
                    <button
                      class="project-preview-trigger"
                      type="button"
                      :aria-label="`预览${group.title}界面展示 ${index + 1}`"
                      @click.stop="openPreview(src, group.title, index)"
                    >
                      <img
                        :src="src"
                        :alt="`${group.title}界面展示 ${index + 1}`"
                        loading="lazy"
                        decoding="async"
                        @load="handleMediaImageLoad(group.id)"
                      />
                      <span>点击预览</span>
                    </button>
                  </figure>
                </div>
              </section>
            </div>
            <div class="project-responsibilities">
              <h4>负责内容</h4>
              <ul>
                <li v-for="detail in project.details" :key="detail">{{ detail }}</li>
              </ul>
            </div>
            </div>
          </div>
          </article>
        </template>
      </div>
    </section>

    <section id="practice" class="content-band practice-band reveal">
      <div class="section-heading">
        <p class="eyebrow">Campus Practice</p>
        <h2>学生工作</h2>
      </div>
      <div class="practice-list">
        <article v-for="item in practices" :key="item.title" class="practice-card reveal">
          <time>{{ item.time }}</time>
          <div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.detail }}</p>
          </div>
        </article>
      </div>
    </section>

    <section id="skills" class="content-band reveal">
      <div class="section-heading">
        <p class="eyebrow">Technical Stack</p>
        <h2>技术能力</h2>
      </div>
      <div class="skill-grid">
        <article v-for="group in skills" :key="group.title" class="skill-card reveal">
          <div class="skill-card-header">
            <h3>{{ group.title }}</h3>
          </div>
          <div class="tag-list">
            <span v-for="(item, index) in group.items" :key="item" :style="{ '--tag-index': index }">{{ item }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="contact-section reveal">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>期待一起做点扎实的东西</h2>
        <p>如果你正在寻找认真、愿意学习、能把问题推进到底的计算机专业应届生，欢迎联系我。</p>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="previewImage" class="image-preview" role="dialog" aria-modal="true" :aria-label="previewTitle" @click.self="closePreview">
        <div class="image-preview-panel">
          <header>
            <strong>{{ previewTitle }}</strong>
            <div class="image-preview-actions">
              <span>{{ Math.round(previewScale * 100) }}%</span>
              <button type="button" aria-label="关闭预览" @click="closePreview">关闭</button>
            </div>
          </header>
          <div
            ref="previewCanvasRef"
            class="image-preview-canvas"
            :class="{
              'is-zoomed':
                previewScale >= 1 ||
                previewDisplayHeight > previewCanvasHeight ||
                previewDisplayWidth > previewCanvasWidth,
              'is-dragging': isPreviewDragging,
            }"
            :style="{
              width: previewCanvasWidth ? `${previewCanvasWidth}px` : undefined,
              height: previewCanvasHeight ? `${previewCanvasHeight}px` : undefined,
            }"
            @wheel="handlePreviewWheel"
            @pointerdown="startPreviewDrag"
            @pointermove="movePreviewDrag"
            @pointerup="stopPreviewDrag"
            @pointercancel="stopPreviewDrag"
          >
            <img
              ref="previewImageRef"
              :src="previewImage"
              :alt="previewTitle"
              :class="{ 'is-ready': previewReady }"
              :style="{
                width: `${previewDisplayWidth}px`,
                height: `${previewDisplayHeight}px`,
                marginLeft: `${previewOffsetX}px`,
                marginTop: `${previewOffsetY}px`,
              }"
              @load="fitPreviewImage"
              draggable="false"
            />
            <span class="image-preview-hint">滚轮滚动，Ctrl + 滚轮缩放，按住拖动</span>
          </div>
        </div>
      </div>
    </Teleport>
  </main>
</template>
