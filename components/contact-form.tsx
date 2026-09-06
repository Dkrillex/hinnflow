"use client";

import { useState, type FormEvent } from "react";
import { useLang } from "@/lib/i18n";

export default function ContactForm() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  // TODO: 接入真实表单接口（如企业邮箱 API / CRM）后替换本地模拟提交
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form glass form-success">
        <span className="ok-icon">
          <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
            <path
              d="m5 12.5 4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p>{t.contact.form.successTitle}</p>
        <p>{t.contact.form.successSub}</p>
      </div>
    );
  }

  const f = t.contact.form;

  return (
    <form className="contact-form glass" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          {f.name}
          <input type="text" name="name" placeholder={f.namePh} required />
        </label>
        <label>
          {f.company}
          <input type="text" name="company" placeholder={f.companyPh} required />
        </label>
      </div>
      <label>
        {f.email}
        <input type="email" name="email" placeholder={f.emailPh} required />
      </label>
      <label>
        {f.message}
        <textarea name="message" rows={4} placeholder={f.messagePh} required />
      </label>
      <button className="btn btn-white btn-block" type="submit">
        {f.submit}
      </button>
      <p className="form-note">{f.note}</p>
    </form>
  );
}
