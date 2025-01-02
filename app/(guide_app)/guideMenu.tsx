import React, { ReactNode } from 'react';
import GuideSideMenu from './guideSideMenu';
import { MenuItem } from './types/guideMenu';

const GuideMenuData: MenuItem[] = [
  {
    id:11,
    title:"Introduction",
    url: "/guide_doc/intro-main",
    headlineTitle: "대한민국 구석구석 Design System",
    headlineCopy: "대한민국 구석구석 Design System (이하 VKDS)는 디지털정부 Design System에서 규정된 일반원칙과 스타일을 기반으로 대한민국 구석구석의 특성을 반영하고 관광 마케팅 필요를 충족시킬 수 있도록 수정되었습니다.",
    contentSrc : "intro-main-content.tsx"
  },
  {
    id:2,
    title:"Foundation",
    children: [
      {
        id:21,
        title:"Color",
        url: "/guide_doc/foundation-color",
        headlineTitle: "Colors",
        headlineCopy: "Colors는 Brand의 Identity를 규정하는 핵심요소이며 맥락에 대한 정보를 제공합니다.",
        thumbSrc : "/com_doc/button.svg",
        contentSrc : "foundation-color-content.tsx"
      },
      {
        id:22,
        title:"Typography",
        url: "/guide_doc/foundation-typography",
        headlineTitle: "Typography",
        headlineCopy: "서체는 정보를 전달하고 일관된 경험을 제공하는 중요한 요소다. 글꼴, 크기, 두께, 계층 등을 정의하여 텍스트의 내용과 중요도를 시각적으로 표현하고 다양한 화면에서 동일하게 경험할 수 있도록 한다.",
        thumbSrc : "/com_doc/button.svg",
        contentSrc : "foundation-typography-content.tsx"
      },
      {
        id:23,
        title:"Icons",
        url: "/guide_doc/foundation-icons",
        headlineTitle: "Icons",
        headlineCopy: "시스템 아이콘은 간단한 동작, 기능을 나타내거나 사물의 상징을 기호로 만든 시각 언어로 한정된 공간에서 효율적으로 정보를 전달하는 역할을 한다.",
        thumbSrc : "/com_doc/button.svg",
        contentSrc : "foundation-icons-content.tsx"
      },
      {
        id:24,
        title:"Layout",
        url: "/guide_doc/foundation-layout",
        headlineTitle: "Layout",
        headlineCopy: "전체 App의 레이아웃 일관성을 위해 Column gird와 4px Spacing rule을 적용합니다.",
        thumbSrc : "/com_doc/button.svg",
        contentSrc : "foundation-layout-content.tsx"
      }
    ]
  },
  {
    id:3,
    title: "Components",
    children: [
      {
        id: 31,
        title: "Actions",
        children: [
          {
            id:311,
            title: "Action Button",
            url: "/guide_doc/action-button",
            headlineTitle: "Action Button",
            headlineCopy: "Action Button은 사용자가 특정 행동이나 액션을 수행하기 위해 사용됩니다. Card 컴포넌트, Form 등 요소 안에서 사용자액션을 위해 사용된다는 점에서 Button과 차이점을 갖습니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "action-button-content.tsx"
          },
          {
            id:312,
            title: "Button",
            url: "/guide_doc/button",
            headlineTitle: "Button",
            headlineCopy: "Button은 특정 이벤트나 동작을 발생시키며 사용자에게 다음 액션에서 무슨 일이 일어날지 알려줍니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "button-content.tsx"
          },
          {
            id:313,
            title: "Chips",
            headlineTitle: "Chip",
            url: "/guide_doc/chip",
            headlineCopy: "칩(Chips)은 사용자로 하여금 정보, 선택, 콘텐츠의 필터링, 그리고 특정 액션을 유도합니다.",
            thumbSrc : "/com_doc/tag.svg",
            contentSrc : "chip-content.tsx"
          },
        ]
      },
      {
        id: 32,
        title: "Input and Selection",
        children: [
          {
            id:321,
            title: "Checkbox",
            headlineTitle: "Checkbox",
            url: "/guide_doc/checkbox",
            headlineCopy: "체크박스는 사용자가 여러 개의 옵션 중 한 개 이상의 값을 선택할 수 있도록 하는 경우에 사용합니다.",
            thumbSrc : "/com_doc/checkbox.svg",
            contentSrc : "checkbox-content.tsx"
          },
          
          // {
          //   id:323,
          //   title: "Date Picker",
          //   headlineTitle: "Date Picker",
          //   url:"/guide_doc/datepicker",
          //   headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
          //   thumbSrc : "/com_doc/datetime-picker.svg",
          //   contentSrc : "datepicker-content.tsx",
          // },
          // {
          //   id:324,
          //   title: "Forms",
          //   headlineTitle: "Forms",
          //   url:"/guide_doc/form",
          //   headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
          //   thumbSrc : "/com_doc/button.svg",
          //   contentSrc : "form-content.tsx",
          // },
          
          {
            id:326,
            title: "Radio",
            headlineTitle: "Radio",
            url:"/guide_doc/radio-group",
            headlineCopy: "라디오 버튼을 사용하면 같은 그룹에서 두 개 이상의 항목 중 하나를 선택할 수 있습니다.",
            thumbSrc : "/com_doc/radio.svg",
            contentSrc : "radio-group-content.tsx",
          },
          
          {
            id:327,
            title: "Numberic Stepper",
            headlineTitle: "Numberic Stepper",
            url:"/guide_doc/numberic-stepper",
            headlineCopy: "Stepper는 숫자 값을 늘리거나 줄이는 데 사용되는 구성 요소입니다. 일반적으로 플러스 및 마이너스 버튼을 사용하여 값을 늘리거나 줄입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "numberic-stepper-content.tsx",
          },
          {
            id:325,
            title: "Text Fields",
            headlineTitle: "Text Fields",
            url:"/guide_doc/input",
            headlineCopy: "텍스트 필드(Text Fields)는 사용자가 UI 상 텍스트 입력 및 확인 시 활용되는 컴포넌트입니다.",
            thumbSrc : "/com_doc/textfield.svg",
            contentSrc : "input-content.tsx",
          },
          {
            id:329,
            title: "Slider",
            headlineTitle: "Slider",
            url:"/guide_doc/slider",
            headlineCopy: "Slider를 이용하면 사용자가 단일 숫자 값이나 최소값과 최대값 사이의 범위를 선택할 수 있습니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "slider-content.tsx",
          },
          {
            id:330,
            title: "Switch",
            headlineTitle: "Switch",
            url:"/guide_doc/switch",
            headlineCopy: "특정 옵션을 켜고 끄기 위한 Control Interface 입니다. 사용자는 스위치를 보고 옵션의 상태를 이해할 수 있습니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "switch-content.tsx",
          }
        ]
      },
      {
        id: 33,
        title: "Indicator and Status",
        children: [
          {
            id:331,
            title: "Badge",
            headlineTitle: "Badge",
            url: "/guide_doc/badge",
            headlineCopy: "Badge는 사용자에게 정보를 강조하거나 특정 요소에 주의를 끌기 위해 아이콘 또는 텍스트에 추가적인 요소를 사용하여 표시합니다. ",
            thumbSrc : "/com_doc/badge.svg",
            contentSrc : "badge-content.tsx", 
          },
          {
            id:332,
            title: "Indicator",
            headlineTitle: "Indicator",
            url: "/guide_doc/indicator",
            headlineCopy: "Indicator는 현재상태를 표시하거나 짧은 텍스트 정보를 표시하는 용도로 사용합니다.",
            thumbSrc : "/com_doc/badge.svg",
            contentSrc : "indicator-content.tsx", 
          },
          {
            id:333,
            title: "Tag",
            headlineTitle: "Tag",
            url: "/guide_doc/tag",
            headlineCopy: "Tag는 요소의 상태, 주요 속성 또는 범주를 표시하고 사용자가 콘텐츠를 필터링하기 위한 정보를 입력할 수 있는 정적이고 조치 가능한 구성 요소입니다.",
            thumbSrc : "/com_doc/tag.svg",
            contentSrc : "tag-content.tsx", 
          },
        ]
      },
      {
        id: 34,
        title: "Content Display",
        children: [
          {
            id:341,
            title: "Accordion",
            headlineTitle: "Accordion",
            url: "/guide_doc/accordion",
            headlineCopy: "체크박스는 사용자가 여러 개의 옵션 중 한 개 이상의 값을 선택할 수 있도록 하는 경우에 사용합니다.",
            thumbSrc : "/com_doc/link.svg",
            contentSrc : "accordion-content.tsx",
          },
          {
            id:342,
            title: "Avatar",
            headlineTitle: "Avatar",
            url:"/guide_doc/avatar",
            headlineCopy: "Avatar은 사용자를 표상하는 이미지 컴포넌트입니다. 기본적으로 프로필이미지를 사용하며 옵션으로 이니셜을 사용할 수 있습니다.",
            thumbSrc : "/com_doc/avatar.svg",
            contentSrc : "avatar-content.tsx",
          },
          {
            id:343,
            title: "Card",
            headlineTitle: "Card",
            url:"/guide_doc/card-basic",
            headlineCopy: "카드 유형 중 가장 기본이 되는 카드 유형이며 카드안에 다양한 형태와 유형의 컨텐츠가 포함 될 수 있도록 다양한 Variation을 가집니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "card-basic-content.tsx",
          },
          {
            id:344,
            title: "Card / Promotion",
            headlineTitle: "Card / Promotion",
            url:"/guide_doc/card-promotion",
            headlineCopy: "프로모션 카드는 일반적인 목적으로 사용되는 카드보다 상대적으로 강조해서 보여줄 필요가 있는 컨텐츠에 사용됩니다. 특정 여행지,여행기사를 부각시킬 필요가 있을 때 사용합니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "card-promotion-content.tsx",
          },
          {
            id:345,
            title: "Card / Message",
            headlineTitle: "Card / Message",
            url:"/guide_doc/card-message",
            headlineCopy: "메세지 카드는 특별한 이벤트나 행사 정보에 사용자의 이목을 집중시킬 필요가 있을 때 사용됩니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "card-message-content.tsx",
          },
          {
            id:346,
            title: "Cards Carousel",
            headlineTitle: "Cards Carousel",
            url:"/guide_doc/carousel-cards",
            headlineCopy: "Card들을 Stack로 쌓아서 보여주지 않고 하나의 열에서 보여주고자 할때 Card Carousel를 적용합니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "carousel-cards-content.tsx",
          },
          // {
          //   id:348,
          //   title: "Carousel",
          //   headlineTitle: "Carousel",
          //   url:"/guide_doc/carousel",
          //   headlineCopy: "Carousel은 연관된 그룹의 컨텐츠를 가로방향으로 순차적으로 보여줍니다.",
          //   thumbSrc : "/com_doc/button.svg",
          //   contentSrc : "carousel-content.tsx",
          // },
          {
            id:349,
            title: "List Item",
            headlineTitle: "List Item",
            url:"/guide_doc/list-item",
            headlineCopy: "목록은 텍스트 및 텍스트/이미지 조합의 모음으로 수직으로 정렬된 항목 그룹을 의미합니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "list-item-content.tsx",
          },
          // {
          //   id:350,
          //   title: "List",
          //   headlineTitle: "List",
          //   url:"/guide_doc/list",
          //   headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
          //   thumbSrc : "/com_doc/button.svg",
          //   contentSrc : "list-content.tsx",
          // },
          {
            id:351,
            title: "Heading",
            headlineTitle: "Heading",
            url:"/guide_doc/heading",
            headlineCopy: "Section Heading은 새로운 Section을 시작하고 사용자에게 화면에 콘텐츠가 어떻게 구성되어 있는지에 대한 개요를 제공합니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "section-heading-content.tsx",
          },
          {
            id:352,
            title: "Tile",
            headlineTitle: "Tile",
            url:"/guide_doc/tile",
            headlineCopy: "Tile은 추가 컨트롤요소를 포함할 수 있는 버튼과 같은 구성 요소입니다. 타일 내부의 요소는 레이아웃에 따라 정사각형 또는 직사각형 형태안에서 정렬됩니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "tile-content.tsx",
          }
        ]
      },
      {
        id: 35,
        title: "Messaging",
        children: [
          {
            id:351,
            title: "Alert Dialog",
            headlineTitle: "Alert Dialog",
            url: "/guide_doc/alert-dialog",
            headlineCopy: "체크박스는 사용자가 여러 개의 옵션 중 한 개 이상의 값을 선택할 수 있도록 하는 경우에 사용합니다.",
            thumbSrc : "/com_doc/modal-dialog.svg",
            contentSrc : "alert-dialog-content.tsx",
          },
          {
            id:352,
            title: "Banner",
            headlineTitle: "Banner",
            url:"/guide_doc/banner",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
            thumbSrc : "/com_doc/banner.svg",
            contentSrc : "banner-content.tsx",
          },
          // {
          //   id:353,
          //   title: "Snackbar",
          //   headlineTitle: "Snackbar",
          //   url:"/guide_doc/banner",
          //   headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
          //   thumbSrc : "/com_doc/button.svg",
          //   contentSrc : "banner-content.tsx",
          // },
          {
            id:354,
            title: "Toast",
            headlineTitle: "Toast",
            url:"/guide_doc/toast",
            headlineCopy: "Toast는 짧은 메시지나 알림을 표시하는 데 사용되는 웹이나 태블릿용 구성 요소입니다. Toast는 종종 양식 제출이나 작업 완료와 같은 성공 또는 실패한 작업을 확인합니다. 일반적으로 자동으로 사라지기 전에 몇 초 동안 표시되지만 해제할 때까지 남아 있을 수 있습니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "toast-content.tsx",
          },
          // {
          //   id:355,
          //   title: "Tooltip",
          //   headlineTitle: "Tooltip",
          //   url:"/guide_doc/tooltip",
          //   headlineCopy: "Tooltip은 새로운 콘텐츠와 기능을 소개하거나 간단한 단계별 안내를 제공하는 데 사용되는 간단하고 유익한 메시지입니다.",
          //   thumbSrc : "/com_doc/button.svg",
          //   contentSrc : "tooltip-content.tsx",
          // }
        ]
      },
      {
        id: 36,
        title: "Container and layout",
        children: [
          {
            id:361,
            title: "Drawer",
            headlineTitle: "Drawer",
            url: "/guide_doc/drawer",
            headlineCopy: "Drawer은 화면하단에서 보여지는 구성 요소입니다. 일반적으로 세부 보기나 옵션 목록과 같은 추가 콘텐츠를 표시하는 데 사용됩니다.",
            thumbSrc : "/com_doc/link.svg",
            contentSrc : "drawer-content.tsx",
          },
          {
            id:365,
            title: "Popover",
            headlineTitle: "Popover",
            url:"/guide_doc/popover",
            headlineCopy: "Popover는 상황에 맞는 정보를 표시하는 작은 오버레이 컨테이너입니다. Popover는 일반적으로 사용자가 페이지의 요소와 상호 작용할 때 나타나며 닫을 때까지 열려 있습니다. Popover는 모달 및 비모달로 표시될 수 있으며 다양한 짧은 콘텐츠를 지원하도록 사용자 정의할 수 있습니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "popover-content.tsx",
          },
          {
            id:366,
            title: "Sheet",
            headlineTitle: "Sheet",
            url:"/guide_doc/sheet",
            headlineCopy: "Sheet는 현재 화면에서 이동하지 않고 추가적인 정보를 전달하거나 보조적인 동작을 수행할 수 있는 수단을 제공하는 목적으로 사용됩니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "sheet-content.tsx",
          },
        ]
      },
      {
        id: 37,
        title: "Navigation",
        children: [
          {
            id:371,
            title: "Breadcrumbs",
            headlineTitle: "Breadcrumbs",
            url: "/guide_doc/breadcrumb",
            headlineCopy: "Breadcrumb은 웹사이트나 애플리케이션 내에서 사용자의 현재 위치를 보여주는 링크의 표시입니다. 브레드크럼을 사용하면 사용자가 탐색 계층 구조에서 이전 페이지나 상위 페이지로 빠르게 돌아갈 수 있습니다.",
            thumbSrc : "/com_doc/link.svg",
            contentSrc : "breadcrumb-content.tsx"
          },
          // {
          //   id:372,
          //   title: "Bottom Bar",
          //   headlineTitle: "Bottom Bar",
          //   url:"/guide_doc/bottom-bar",
          //   headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
          //   thumbSrc : "/com_doc/button.svg",
          //   contentSrc : "bottom-bar-content.tsx",
          // },
          {
            id:373,
            title: "Link",
            headlineTitle: "Link",
            url:"/guide_doc/link",
            headlineCopy: "링크는 다른 서비스/애플리케이션, 한 서비스 내의 다른 화면, 한 화면 내의 다른 섹션 등으로 이동하는 데 사용되는 탐색 요소입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "link-content.tsx",
          },
          // {
          //   id:374,
          //   title: "Navigation Header",
          //   headlineTitle: "Navigation Header",
          //   url:"/guide_doc/navigation-header",
          //   headlineCopy: "Navigation Header는 화면의 컨텍스트를 설정하고 사용자가 다양한 흐름을 쉽게 탐색할 수 있도록 하는 상단에 고정된 구성 요소입니다.",
          //   thumbSrc : "/com_doc/button.svg",
          //   contentSrc : "navigation-header-content.tsx",
          // },
          {
            id:375,
            title: "Pagination",
            headlineTitle: "Pagination",
            url:"/guide_doc/pagination",
            headlineCopy: "Pagination은 주어진 컨텍스트 내에서 로드된 페이지 또는 다른 콘텐츠의 수를 전달합니다. 사용자에게 현재 위치를 보여주고 이전, 다음 및 마지막 페이지에 액세스할 수 있도록 합니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "pagination-content.tsx",
          },
          {
            id:377,
            title: "Tabs",
            headlineTitle: "Tabs",
            url:"/guide_doc/tabs",
            headlineCopy: "Tabs은 사용자가 관련 콘텐츠 그룹 사이를 쉽게 이동할 수 있도록 하는 Navigation 구성 요소입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "tabs-content.tsx",
          },
          // {
          //   id:378,
          //   title: "Segmented Control",
          //   headlineTitle: "Segmented Control",
          //   url:"/guide_doc/segmented-control",
          //   headlineCopy: "Segmented Control은 2개 이상의 Segment가 모인 가로형 네비게이션 요소이며 각 Segment는 버튼의 역할을 수행합니다.",
          //   thumbSrc : "/com_doc/button.svg",
          //   contentSrc : "segmented-control-content.tsx",
          // }
        ]
      },
      // {
      //   id: 38,
      //   title: "Data and tables",
      //   children: [
      //     {
      //       id:331,
      //       title: "Checkbox",
      //       headlineTitle: "Checkbox",
      //       url: "/guide_doc/checkbox",
      //       headlineCopy: "체크박스는 사용자가 여러 개의 옵션 중 한 개 이상의 값을 선택할 수 있도록 하는 경우에 사용합니다.",
      //       thumbSrc : "/com_doc/link.svg",
      //       contentSrc : "./contents/checkbox-content.tsx",
      //       linkVkds : "https://uiux.egovframe.go.kr/guide/component/component_04_07.html",
      //       linkShadcn : "https://uiux.egovframe.go.kr/guide/component/component_04_07.html" 
      //     },
      //     {
      //       id:332,
      //       title: "Date Picker",
      //       headlineTitle: "Date Picker",
      //       url:"/guide_doc/datepicker",
      //       headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
      //       thumbSrc : "/com_doc/button.svg",
      //       contentSrc : "./contents/datepicker.tsx",
      //     }
      //   ]
      // },
    ] /* Components END */
  },
  {
    id:4,
    title:"Patterns",
    children:[
      {
        id:41,
        title:"App 공통",
        children: [
          {
            id:4110,
            title: "Header Navigation",
            headlineTitle: "Header Navigation",
            url:"/guide_doc/pattern-common-header",
            headlineCopy: "App 전체 Navigation을 위한 Header Navigation 입니다",
            contentSrc : "pattern-common-header.tsx",
          },
          {
            id:4111,
            title: "Bottom Bar",
            headlineTitle: "Bottom Bar, Floating Button",
            url:"/guide_doc/pattern-common-bottom-bar",
            headlineCopy: "Mobile 모드에서는 Bottom Bar, Desktop Mode에서는 Floating Button으로 변경",
            contentSrc : "pattern-common-bottom-bar.tsx",
          },
          {
            id:412,
            title: "전체메뉴",
            headlineTitle: "전체메뉴 Modal",
            url:"/guide_doc/pattern-common-nav",
            headlineCopy: "열린 전체메뉴 Modal",
            contentSrc : "pattern-common-nav.tsx",
          },
          {
            id:413,
            title: "Footer",
            headlineTitle: "Footer",
            url:"/guide_doc/pattern-common-footer",
            headlineCopy: "App 공통 Footer 컴포넌트",
            contentSrc : "pattern-common-footer.tsx",
          },
          {
            id:414,
            title: "통합검색 창",
            headlineTitle: "통합검색 창",
            url:"/guide_doc/pattern-search-modal",
            headlineCopy: "App 공통 - 통합검색 창",
            contentSrc : "pattern-search-modal.tsx",
          },
          {
            id:415,
            title: "통합검색 결과 (MO)",
            headlineTitle: "통합검색 결과",
            url:"/guide_doc/page-search-result-1",
            headlineCopy: "통합검색 결과 - Mobile 모드",
            contentSrc : "page-search-result-1.tsx",
          },
          {
            id:416,
            title: "통합검색 결과 (PC)",
            headlineTitle: "통합검색 결과",
            url:"/guide_doc/page-search-result-2",
            headlineCopy: "통합검색 결과 - Desktop 모드",
            contentSrc : "page-search-result-2.tsx",
          },
          {
            id:417,
            title: "Basic Card",
            headlineTitle: "Basic Card",
            url:"/guide_doc/pattern-common-basic-card",
            headlineCopy: "App 전체에 사용되는 기본 Card 컴포넌트",
            contentSrc : "pattern-common-card-1.tsx",
          }
        ]
      },
      {
        id:42,
        title:"Pages",
        children: [
          {
            id:4210,
            title: "Home (MO)",
            headlineTitle: "Home",
            url:"/guide_doc/page-home-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-home-1.tsx",
          },
          {
            id:4211,
            title: "Home (PC)",
            headlineTitle: "Home",
            url:"/guide_doc/page-home-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-home-2.tsx",
          },
          {
            id:4220,
            title: "지역 목록 (MO)",
            headlineTitle: "지역 목록",
            url:"/guide_doc/page-local-list-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-local-list-1.tsx",
          },
          {
            id:4221,
            title: "지역 목록 (PC)",
            headlineTitle: "지역 목록",
            url:"/guide_doc/page-local-list-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-local-list-2.tsx",
          },
          {
            id:4222,
            title: "여행지 상세 (MO)",
            headlineTitle: "여행지상세",
            url:"/guide_doc/page-tour-spot-view-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-tour-spot-view-1.tsx",
          },
          {
            id:4223,
            title: "여행지 상세 (PC)",
            headlineTitle: "여행지상세",
            url:"/guide_doc/page-tour-spot-view-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-tour-spot-view-2.tsx",
          },
          {
            id:4230,
            title: "테마 목록 (MO)",
            headlineTitle: "테마 목록",
            url:"/guide_doc/page-theme-list-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-theme-list-1.tsx",
          },
          {
            id:4231,
            title: "테마 목록 (PC)",
            headlineTitle: "테마 목록",
            url:"/guide_doc/page-theme-list-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-theme-list-2.tsx",
          },
          {
            id:4240,
            title: "추천 목록 (MO)",
            headlineTitle: "추천 목록",
            url:"/guide_doc/page-recommend-list-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-recommend-list-1.tsx",
          },
          {
            id:4241,
            title: "추천 목록 (PC)",
            headlineTitle: "추천 목록",
            url:"/guide_doc/page-recommend-list-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-recommend-list-2.tsx",
          },
          {
            id:4250,
            title: "이벤트 목록 (MO)",
            headlineTitle: "이벤트 목록",
            url:"/guide_doc/page-event-list-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-event-list-1.tsx",
          },
          {
            id:4251,
            title: "이벤트 목록 (PC)",
            headlineTitle: "이벤트 목록",
            url:"/guide_doc/page-event-list-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-event-list-2.tsx",
          },
          {
            id:4252,
            title: "이벤트 상세 (MO)",
            headlineTitle: "이벤트 상세",
            url:"/guide_doc/page-event-view-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-event-view-1.tsx",
          },
          {
            id:4253,
            title: "이벤트 상세 (PC)",
            headlineTitle: "이벤트 상세",
            url:"/guide_doc/page-event-view-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-event-view-2.tsx",
          },
          {
            id:4260,
            title: "여행지 목록 (MO)",
            headlineTitle: "여행지 목록",
            url:"/guide_doc/page-tour-spot-list-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-tour-spot-list-1.tsx",
          },
          {
            id:4261,
            title: "여행지 목록 (PC)",
            headlineTitle: "여행지 목록",
            url:"/guide_doc/page-tour-spot-list-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-tour-spot-list-2.tsx",
          },
          {
            id:4270,
            title: "여행기사 목록 (MO)",
            headlineTitle: "여행기사 목록",
            url:"/guide_doc/page-article-list-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-article-list-1.tsx",
          },
          {
            id:4271,
            title: "여행기사 목록 (PC)",
            headlineTitle: "여행기사 목록",
            url:"/guide_doc/page-article-list-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-article-list-2.tsx",
          },
          {
            id:4272,
            title: "여행기사 상세 (MO)",
            headlineTitle: "여행기사 상세",
            url:"/guide_doc/page-article-view-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-article-view-1.tsx",
          },
          {
            id:4273,
            title: "여행기사 상세 (PC)",
            headlineTitle: "여행기사 상세",
            url:"/guide_doc/page-article-view-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-article-view-2.tsx",
          },
          {
            id:4280,
            title: "축제 목록 (MO)",
            headlineTitle: "축제 목록",
            url:"/guide_doc/page-festival-list-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-festival-list-1.tsx",
          },
          {
            id:4281,
            title: "축제 목록 (PC)",
            headlineTitle: "축제 목록",
            url:"/guide_doc/page-festival-list-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-festival-list-2.tsx",
          },
          {
            id:4282,
            title: "축제 상세 (MO)",
            headlineTitle: "축제 상세",
            url:"/guide_doc/page-festival-view-1",
            headlineCopy: "Mobile 모드",
            contentSrc : "page-festival-view-1.tsx",
          },
          {
            id:4283,
            title: "축제 상세 (PC)",
            headlineTitle: "축제 상세",
            url:"/guide_doc/page-festival-view-2",
            headlineCopy: "Desktop 모드",
            contentSrc : "page-festival-view-2.tsx",
          },
          
        ]
      }
    ]
      
  },
];

const GuideMenu = (): ReactNode => {
  return (
    <nav>
      <GuideSideMenu items={GuideMenuData} level={1} />
    </nav>
  );
};

export { GuideMenu, GuideMenuData };