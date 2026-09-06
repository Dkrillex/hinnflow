"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "zh" | "en";

const zh = {
  nav: {
    products: "业务支柱",
    solutions: "价值链路",
    why: "为什么希流",
    about: "关于我们",
    contact: "联系我们",
    cta: "获取方案",
    menu: "打开菜单",
    switch: "切换语言",
  },
  hero: {
    badge: "✨ 希流 Hinnflow · 大模型研究 × AI Token × AIGC 平台",
    sub: "希流 Hinnflow 以大模型研究为底座、AI Token 为最小智能单元、AIGC 平台为产品载体，把智能化作流动的创造—— 从 Token 到创造，让智能如洋流流动。",
    ctaPrimary: "预约演示",
    ctaSecondary: "了解业务",
  },
  stats: [
    { target: 10, unit: "亿+", label: "Tokens 流式生成（示例）" },
    { target: 3, unit: "大", label: "业务支柱 · 研究 / Token / AIGC" },
    { target: 100, unit: "+", label: "AIGC 创作场景（示例）" },
    { target: 24, unit: "/7", label: "流式服务持续在线" },
  ],
  pillars: {
    eyebrow: "Pillars",
    titleA: "三大支柱，",
    titleSerif: "一条流动的",
    titleB: "智能主线",
    desc: "研究是底座，Token 是单元，创造是终点——三大支柱构成希流的业务模型。",
    more: "了解",
    items: [
      {
        num: "PILLAR 01",
        name: "大模型研究",
        en: "LLM Research",
        desc: "底层模型与推理能力，研究即底座。持续投入基础模型、推理效率与能力边界，为上层业务提供技术纵深。",
        feats: ["基础模型研发", "推理效率优化", "能力边界探索"],
      },
      {
        num: "PILLAR 02",
        name: "AI Token",
        en: "Token Economy",
        desc: "Token 经济与流式服务，最小智能单元。以 Token 为计量与价值单位，提供可流式、可计量的智能服务与 API 能力。",
        feats: ["流式 Token 服务", "Token 经济与计费", "可计量的智能 API"],
      },
      {
        num: "PILLAR 03",
        name: "AIGC 平台",
        en: "Creation Platform",
        desc: "内容生成与创作产品，已有 AIGC 产品落地。面向用户与场景交付可用的创作产品，完成从能力到价值的闭环。",
        feats: ["多模态内容生成", "AIGC 产品已落地", "从能力到价值闭环"],
      },
    ],
  },
  chain: {
    eyebrow: "From Token to Creation",
    titleA: "价值链路：",
    titleSerif: "从 Token 到创造",
    desc: "一条链路讲清希流的业务模型——能力自研究生长，价值向创造流动。",
    tag: "From Token to Creation · 一句话讲清 大模型 → Token → AIGC 链路",
    nodes: [
      { name: "大模型研究", desc: "底层模型与推理能力，研究即底座" },
      { name: "AI Token", desc: "Token 经济与流式服务，最小智能单元" },
      { name: "AIGC 平台", desc: "内容生成与创作产品，已有产品落地" },
      { name: "创造", desc: "每一个 Token 的归宿，价值闭环", final: true },
    ],
  },
  why: {
    eyebrow: "Why Hinnflow",
    titleA: "为什么选择",
    titleSerif: "希流",
    desc: "我们相信：智能不应被囤积，而应如水般流向每一处需要它的地方。",
    quoteA: "溪流虽小，却始终知道海的方向。",
    quoteB: "希流亦如此 —— 每一个 Token 都是一滴水，正流向创造，终成洋流。",
    quoteBy: "— 希流创始团队",
    items: [
      { title: "研究即底座", desc: "以大模型研究驱动产品，底层模型与推理能力自研可控，不建空中楼阁。" },
      { title: "流式体验", desc: "Token 级流式生成与交付，响应如流水般顺滑，智能即取即用。" },
      { title: "落地验证", desc: "多款 AIGC 产品已上线运营，从研究到产品的闭环已被验证。" },
      { title: "开放连接", desc: "API 与平台开放集成，让智能流向更多业务场景与合作伙伴。" },
    ],
  },
  about: {
    eyebrow: "About Us",
    titleA: "希流 Hinnflow，",
    titleSerif: "让智能如洋流流动",
    text1: "「希流」，谐音「溪流」——溪流虽小，却知道海的方向。希流 Hinnflow 创立于 2025 年，是一家专注 AI 智能产品的科技公司：以大模型研究为底座，以 AI Token 为最小智能单元，以 AIGC 平台为产品载体。",
    text2Pre: "我们相信智能不应沉睡在机房之中，而应如洋流般奔涌——跨山越海、生生不息，流向每一个创作者与企业。围绕同一个使命：",
    text2Strong: "让每一个 Token 都流向创造。",
    chips: ["使命 · 让每一个 Token 都流向创造", "路线 · 从 Token 到创造", "愿景 · 让智能如洋流流动"],
    facts: [
      { label: "创立年份", value: "2025 年" },
      { label: "公司主体", value: "Hinnflow Limited" },
      { label: "所在地", value: "广州 · 琶洲西区" },
      { label: "业务方向", value: "大模型研究 × AI Token × AIGC" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    titleA: "让智能",
    titleSerif: "流向",
    titleB: "您的业务",
    desc: "告诉我们您的场景与需求，团队将在 1 个工作日内与您联系。",
    email: "business@hinnflow.com",
    phone: "186 2044 2110",
    addr: "广州市海珠区琶洲西区 元创·OPC社区（琶洲国际人才驿站）",
    form: {
      name: "您的称呼",
      namePh: "张先生 / 李女士",
      company: "公司名称",
      companyPh: "贵司名称",
      email: "联系邮箱",
      emailPh: "name@company.com",
      message: "需求描述",
      messagePh: "简单描述您的业务场景与想解决的问题…",
      submit: "提交需求",
      note: "提交即表示同意我们按照《隐私政策》处理您的信息。",
      successTitle: "已收到您的需求，方案专家将在 1 个工作日内与您联系。",
      successSub: "也可直接致电 186 2044 2110 加快处理。",
    },
  },
  footer: {
    slogan: "让每一个 Token 都流向创造",
    sloganEn: "Let Every Token Flow to Creation",
    copyright: "© 2026 Hinnflow Limited 希流. 保留所有权利。",
    legal: "Hinnflow Limited · 广州市海珠区琶洲西区 元创·OPC社区",
    // TODO: 备案号当前为占位数字，取得正式备案后替换
    icp: "粤ICP备2026001234号-1",
    police: "粤公网安备 44010502001234号",
  },
};

const en = {
  nav: {
    products: "Pillars",
    solutions: "Value Chain",
    why: "Why Hinnflow",
    about: "About Us",
    contact: "Contact",
    cta: "Get in Touch",
    menu: "Open menu",
    switch: "Switch language",
  },
  hero: {
    badge: "✨ Hinnflow · LLM Research × AI Token × AIGC Platform",
    sub: "Hinnflow builds on LLM research, treats the token as the smallest unit of intelligence, and ships AIGC products — flowing intelligence into creation. From Token to Creation, let intelligence flow like ocean currents.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Explore",
  },
  stats: [
    { target: 10, unit: "B+", label: "Tokens streamed (sample)" },
    { target: 3, unit: "", label: "Pillars · Research / Token / AIGC" },
    { target: 100, unit: "+", label: "AIGC creation scenarios (sample)" },
    { target: 24, unit: "/7", label: "Streaming service uptime" },
  ],
  pillars: {
    eyebrow: "Pillars",
    titleA: "Three pillars, ",
    titleSerif: "one flowing",
    titleB: " line of intelligence",
    desc: "Research is the base, the token is the unit, creation is the destination — three pillars forming Hinnflow's business model.",
    more: "Learn about ",
    items: [
      {
        num: "PILLAR 01",
        name: "LLM Research",
        en: "Research as the base",
        desc: "Foundation models and reasoning capability. We keep investing in base models, inference efficiency and capability boundaries to power everything above.",
        feats: ["Foundation model R&D", "Inference efficiency", "Capability boundaries"],
      },
      {
        num: "PILLAR 02",
        name: "AI Token",
        en: "Token economy",
        desc: "The smallest unit of intelligence. Measured and priced in tokens, delivered as streamable, meterable AI services and API capabilities.",
        feats: ["Streaming token service", "Token economy & billing", "Meterable AI APIs"],
      },
      {
        num: "PILLAR 03",
        name: "AIGC Platform",
        en: "Creation products",
        desc: "Content generation and creation products, already in production. Delivering usable creation products to users and scenarios, closing the loop from capability to value.",
        feats: ["Multimodal generation", "Products in production", "Capability to value"],
      },
    ],
  },
  chain: {
    eyebrow: "From Token to Creation",
    titleA: "The value chain: ",
    titleSerif: "from Token to Creation",
    desc: "One chain that explains Hinnflow's business — capability grows from research, value flows to creation.",
    tag: "From Token to Creation · LLM → Token → AIGC in one line",
    nodes: [
      { name: "LLM Research", desc: "Foundation models & reasoning, research as the base" },
      { name: "AI Token", desc: "Token economy & streaming, the smallest unit" },
      { name: "AIGC Platform", desc: "Creation products, already in production" },
      { name: "Creation", desc: "Where every token lands — the value loop closed", final: true },
    ],
  },
  why: {
    eyebrow: "Why Hinnflow",
    titleA: "Why choose ",
    titleSerif: "Hinnflow",
    desc: "We believe intelligence should not be hoarded — it should flow, like water, to wherever it is needed.",
    quoteA: "A stream may be small, but it always knows the way to the sea.",
    quoteB: "So it is with Hinnflow — every token is a drop of water, flowing toward creation, destined to become an ocean current.",
    quoteBy: "— Hinnflow founding team",
    items: [
      { title: "Research as the base", desc: "Products driven by LLM research, with self-developed models and reasoning we fully control." },
      { title: "Streaming experience", desc: "Token-level streaming generation and delivery — responses as smooth as flowing water." },
      { title: "Proven in production", desc: "Multiple AIGC products already live, closing the loop from research to product." },
      { title: "Open connections", desc: "Open APIs and platform integrations, flowing intelligence into more scenarios and partners." },
    ],
  },
  about: {
    eyebrow: "About Us",
    titleA: "Hinnflow, ",
    titleSerif: "flowing like ocean currents",
    text1: "\"Hinnflow\" echoes \"stream\" — small as it is, a stream always knows the way to the sea. Founded in 2025, Hinnflow is a technology company focused on AI products — with LLM research as the base, AI tokens as the smallest unit of intelligence, and the AIGC platform as the product vehicle.",
    text2Pre: "We believe intelligence should not sleep in server rooms — it should surge like an ocean current, crossing mountains and seas, flowing to every creator and business. All around one mission: ",
    text2Strong: "let every token flow to creation.",
    chips: [
      "Mission · Let every token flow to creation",
      "Path · From Token to Creation",
      "Vision · Let intelligence flow like ocean currents",
    ],
    facts: [
      { label: "Founded", value: "2025" },
      { label: "Legal entity", value: "Hinnflow Limited" },
      { label: "Location", value: "Pazhou West, Guangzhou" },
      { label: "Focus", value: "LLM Research × AI Token × AIGC" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    titleA: "Let intelligence ",
    titleSerif: "flow into ",
    titleB: "your business",
    desc: "Tell us your scenario and needs — our team will get back to you within one business day.",
    email: "business@hinnflow.com",
    phone: "+86 186 2044 2110",
    addr: "Yuanchuang OPC Community, Pazhou West, Haizhu District, Guangzhou",
    form: {
      name: "Your name",
      namePh: "Jane / John",
      company: "Company",
      companyPh: "Your company",
      email: "Work email",
      emailPh: "name@company.com",
      message: "Your needs",
      messagePh: "Briefly describe your scenario and the problem to solve…",
      submit: "Submit request",
      note: "By submitting, you agree to our processing of your information in accordance with the Privacy Policy.",
      successTitle: "Request received — our team will reach out within 1 business day.",
      successSub: "You can also call +86 186 2044 2110 to speed things up.",
    },
  },
  footer: {
    slogan: "Let Every Token Flow to Creation",
    sloganEn: "Let Every Token Flow to Creation",
    copyright: "© 2026 Hinnflow Limited. All rights reserved.",
    legal: "Hinnflow Limited · Yuanchuang OPC Community, Pazhou West, Guangzhou",
    icp: "粤ICP备2026001234号-1",
    police: "粤公网安备 44010502001234号",
  },
};

const DICT = { zh, en };
export type Dict = typeof zh;

const LangCtx = createContext<{
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
}>({ lang: "zh", t: zh, setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("zh");

  useEffect(() => {
    const saved = window.localStorage.getItem("hinnflow-lang");
    if (saved === "en" || saved === "zh") setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("hinnflow-lang", l);
  }, []);

  return (
    <LangCtx.Provider value={{ lang, t: DICT[lang], setLang }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}
