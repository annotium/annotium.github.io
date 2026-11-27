import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

// Tool names follow app_th.arb (see AUTHORING.md); English is kept in the
// page body at first mention because screenshots still show the English UI.
export const th: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: 'ไทย',
  lang: 'th-TH',
  link: '/th/',
  description: 'คู่มือผู้ใช้ Annotium แอปใส่คำอธิบายภาพถ่ายที่ทันสมัย',
  themeConfig: {
    nav: [
      { text: 'คู่มือ', link: '/th/guide/getting-started' },
      { text: 'เครื่องมือ', link: '/th/tools/overview' },
      { text: 'ขั้นตอนการทำงาน', link: '/th/workflows/projects' },
      { text: 'วิธีใช้', link: '/th/help/troubleshooting' },
      { text: 'อัปเดต', link: '/th/updates/' }
    ],
    sidebar: {
      '/th/guide/': [
        {
          text: 'เริ่มต้นที่นี่',
          items: [
            { text: 'เริ่มต้นใช้งาน', link: '/th/guide/getting-started' },
            { text: 'โปรเจกต์และรูปภาพ', link: '/th/guide/workspaces' }
          ]
        },
        {
          text: 'เลือกพื้นที่ทำงาน',
          items: [
            { text: 'จัดการโปรเจกต์', link: '/th/guide/projects' },
            { text: 'เรียกดูรูปภาพในอุปกรณ์', link: '/th/guide/photos' }
          ]
        },
        {
          text: 'ใช้ตัวแก้ไข',
          items: [
            { text: 'ภาพรวมตัวแก้ไข', link: '/th/guide/editor-overview' },
            { text: 'เลือกและแก้ไขวัตถุ', link: '/th/guide/editing-basics' },
            { text: 'เปลี่ยนคุณสมบัติ', link: '/th/guide/properties' }
          ]
        }
      ],
      '/th/tools/': [
        {
          text: 'เครื่องมือใส่คำอธิบาย',
          items: [
            { text: 'ภาพรวมเครื่องมือ', link: '/th/tools/overview' },
            { text: 'เส้น ลูกศร และการวัด', link: '/th/tools/lines-arrows-measurements' },
            { text: 'ลูกศร', link: '/th/tools/arrow' },
            { text: 'วัดเส้น', link: '/th/tools/line-measure' },
            { text: 'เส้นบอกขนาด', link: '/th/tools/dimension-line' },
            { text: 'รูปทรง', link: '/th/tools/shapes' },
            { text: 'ข้อความและคำบรรยาย', link: '/th/tools/text-callouts' },
            { text: 'คำบรรยาย (สี่เหลี่ยม)', link: '/th/tools/callout-rectangle' },
            { text: 'ไอคอนและแสตมป์', link: '/th/tools/icons-stamps' },
            { text: 'โฟกัสและความเป็นส่วนตัว', link: '/th/tools/focus-privacy' },
            { text: 'แว่นขยาย', link: '/th/tools/loupe' },
            { text: 'เบลอและโมเสก', link: '/th/tools/blur-and-mosaic' },
            { text: 'วาดอิสระและไฮไลต์', link: '/th/tools/freehand-highlight' },
            { text: 'รูปภาพและการจัดองค์ประกอบ', link: '/th/tools/images-compose' }
          ]
        }
      ],
      '/th/workflows/': [
        {
          text: 'ทำงานให้เสร็จ',
          items: [
            { text: 'โปรเจกต์', link: '/th/workflows/projects' },
            { text: 'บันทึกโปรเจกต์', link: '/th/workflows/notes' },
            { text: 'บันทึก ส่งออก และแชร์', link: '/th/workflows/save-export-share' }
          ]
        }
      ],
      '/th/help/': [
        {
          text: 'บัญชีและการตั้งค่า',
          items: [
            { text: 'การตั้งค่า', link: '/th/help/settings' },
            { text: 'Premium และการซื้อ', link: '/th/help/premium' }
          ]
        },
        {
          text: 'วิธีใช้',
          items: [
            { text: 'คำถามที่พบบ่อย', link: '/th/help/faq' },
            { text: 'การแก้ไขปัญหา', link: '/th/help/troubleshooting' }
          ]
        }
      ],
      '/th/updates/': [
        { text: 'อัปเดต', items: [{ text: 'มีอะไรใหม่', link: '/th/updates/' }] }
      ]
    },
    outline: { level: [2, 3], label: 'ในหน้านี้' },
    footer: { message: 'สร้างขึ้นเพื่อผู้ใช้ Annotium', copyright: 'Copyright © Annotium' },
    docFooter: { prev: 'ก่อนหน้า', next: 'ถัดไป' },
    langMenuLabel: 'เปลี่ยนภาษา',
    returnToTopLabel: 'กลับขึ้นด้านบน',
    sidebarMenuLabel: 'เมนู',
    darkModeSwitchLabel: 'ลักษณะ',
    lightModeSwitchTitle: 'เปลี่ยนเป็นธีมสว่าง',
    darkModeSwitchTitle: 'เปลี่ยนเป็นธีมมืด',
    skipToContentLabel: 'ข้ามไปยังเนื้อหา',
    lastUpdated: { text: 'อัปเดตล่าสุด' },
    notFound: {
      title: 'ไม่พบหน้านี้',
      quote: 'หน้าที่คุณกำลังหาไม่มีอยู่หรือถูกย้ายแล้ว',
      linkLabel: 'กลับหน้าแรก',
      linkText: 'กลับหน้าแรก'
    }
  }
}
