import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

// Tool names follow app_ko.arb (see AUTHORING.md); English is kept in the
// page body at first mention because screenshots still show the English UI.
export const ko: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
  label: '한국어',
  lang: 'ko-KR',
  link: '/ko/',
  description: '현대적인 사진 주석 앱 Annotium의 사용자 가이드입니다.',
  themeConfig: {
    nav: [
      { text: '가이드', link: '/ko/guide/getting-started' },
      { text: '도구', link: '/ko/tools/overview' },
      { text: '워크플로', link: '/ko/workflows/projects' },
      { text: '도움말', link: '/ko/help/troubleshooting' },
      { text: '업데이트', link: '/ko/updates/' }
    ],
    sidebar: {
      '/ko/guide/': [
        {
          text: '시작하기',
          items: [
            { text: '빠른 시작', link: '/ko/guide/getting-started' },
            { text: '프로젝트와 사진', link: '/ko/guide/workspaces' }
          ]
        },
        {
          text: '작업 공간 선택',
          items: [
            { text: '프로젝트 관리', link: '/ko/guide/projects' },
            { text: '기기 사진 둘러보기', link: '/ko/guide/photos' }
          ]
        },
        {
          text: '편집기 사용',
          items: [
            { text: '편집기 개요', link: '/ko/guide/editor-overview' },
            { text: '개체 선택 및 편집', link: '/ko/guide/editing-basics' },
            { text: '속성 변경', link: '/ko/guide/properties' }
          ]
        }
      ],
      '/ko/tools/': [
        {
          text: '주석 도구',
          items: [
            { text: '도구 개요', link: '/ko/tools/overview' },
            { text: '선, 화살표, 측정', link: '/ko/tools/lines-arrows-measurements' },
            { text: '화살표', link: '/ko/tools/arrow' },
            { text: '선 측정', link: '/ko/tools/line-measure' },
            { text: '치수선', link: '/ko/tools/dimension-line' },
            { text: '도형', link: '/ko/tools/shapes' },
            { text: '텍스트와 말풍선', link: '/ko/tools/text-callouts' },
            { text: '말풍선(사각형)', link: '/ko/tools/callout-rectangle' },
            { text: '아이콘과 스탬프', link: '/ko/tools/icons-stamps' },
            { text: '포커스와 개인정보 보호', link: '/ko/tools/focus-privacy' },
            { text: '돋보기', link: '/ko/tools/loupe' },
            { text: '흐림과 모자이크', link: '/ko/tools/blur-and-mosaic' },
            { text: '자유 그리기와 강조', link: '/ko/tools/freehand-highlight' },
            { text: '이미지와 합성', link: '/ko/tools/images-compose' }
          ]
        }
      ],
      '/ko/workflows/': [
        {
          text: '작업 마무리',
          items: [
            { text: '프로젝트', link: '/ko/workflows/projects' },
            { text: '프로젝트 메모', link: '/ko/workflows/notes' },
            { text: '저장, 내보내기, 공유', link: '/ko/workflows/save-export-share' }
          ]
        }
      ],
      '/ko/help/': [
        {
          text: '계정 및 환경설정',
          items: [
            { text: '설정', link: '/ko/help/settings' },
            { text: 'Premium 및 구매', link: '/ko/help/premium' }
          ]
        },
        {
          text: '도움말',
          items: [
            { text: '자주 묻는 질문', link: '/ko/help/faq' },
            { text: '문제 해결', link: '/ko/help/troubleshooting' }
          ]
        }
      ],
      '/ko/updates/': [
        { text: '업데이트', items: [{ text: '새로운 기능', link: '/ko/updates/' }] }
      ]
    },
    outline: { level: [2, 3], label: '이 페이지 목차' },
    docFooter: { prev: '이전 페이지', next: '다음 페이지' },
    langMenuLabel: '언어 변경',
    returnToTopLabel: '맨 위로',
    sidebarMenuLabel: '메뉴',
    darkModeSwitchLabel: '모양',
    lightModeSwitchTitle: '라이트 모드로 전환',
    darkModeSwitchTitle: '다크 모드로 전환',
    skipToContentLabel: '콘텐츠로 건너뛰기',
    lastUpdated: { text: '최종 업데이트' },
    notFound: {
      title: '페이지를 찾을 수 없습니다',
      quote: '찾으시는 페이지가 없거나 이동되었습니다.',
      linkLabel: '홈으로 이동',
      linkText: '홈으로 돌아가기'
    }
  }
}
