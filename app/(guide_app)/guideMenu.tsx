import React, { ReactNode } from 'react';
import GuideSideMenu from './guideSideMenu';
import { MenuItem } from './types/guideMenu';

const GuideMenuData: MenuItem[] = [
  {
    id:1,
    title:"Introduction"
  },
  {
    id:2,
    title:"Foundation"
  },
  {
    id:3,
    title: "Components",
    children: [
      {
        id: 31,
        title: "Buttons",
        children: [
          {
            id:311,
            title: "Action Button",
            url: "/guide_doc/action-button",
            headlineTitle: "Action Button",
            headlineCopy: "Action Button은 사용자가 특정 행동이나 액션을 수행하기 위해 사용됩니다. 반복적인 행동과 폼관련 액션에 사용된다는 점에서 Button과 차이점을 갖습니다.",
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
          }
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
          {
            id:322,
            title: "Chip",
            headlineTitle: "Chip",
            url: "/guide_doc/chip",
            headlineCopy: "Chip는 사용자가 여러 항목에서 하나 또는 여러 개를 선택할 수 있도록 하는 구성요소입니다.",
            thumbSrc : "/com_doc/tag.svg",
            contentSrc : "chip-content.tsx"
          },
          {
            id:323,
            title: "Date Picker",
            headlineTitle: "Date Picker",
            url:"/guide_doc/datepicker",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
            thumbSrc : "/com_doc/datetime-picker.svg",
            contentSrc : "datepicker-content.tsx",
          },
          {
            id:324,
            title: "Forms",
            headlineTitle: "Forms",
            url:"/guide_doc/form",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "form-content.tsx",
          },
          {
            id:325,
            title: "Input",
            headlineTitle: "Input",
            url:"/guide_doc/input",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
            thumbSrc : "/com_doc/textfield.svg",
            contentSrc : "input-content.tsx",
          },
          {
            id:326,
            title: "Radio",
            headlineTitle: "Radio",
            url:"/guide_doc/radio-group",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
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
            id:328,
            title: "Select",
            headlineTitle: "Select",
            url:"/guide_doc/select",
            headlineCopy: "Select를 사용하여 미리 준비된 값 목록을 확인하고 선택할 수 있도록 합니다.",
            thumbSrc : "/com_doc/select.svg",
            contentSrc : "select-content.tsx",
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
            headlineCopy: "Slider를 이용하면 사용자가 단일 숫자 값이나 최소값과 최대값 사이의 범위를 선택할 수 있습니다.",
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
            headlineCopy: "체크박스는 사용자가 여러 개의 옵션 중 한 개 이상의 값을 선택할 수 있도록 하는 경우에 사용합니다.",
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
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
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
          {
            id:348,
            title: "Carousel",
            headlineTitle: "Carousel",
            url:"/guide_doc/carousel",
            headlineCopy: "Carousel은 연관된 그룹의 컨텐츠를 가로방향으로 순차적으로 보여줍니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "carousel-content.tsx",
          },
          {
            id:349,
            title: "List Item",
            headlineTitle: "List Item",
            url:"/guide_doc/list-item",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "list-item-content.tsx",
          },
          {
            id:350,
            title: "List",
            headlineTitle: "List",
            url:"/guide_doc/list",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "list-content.tsx",
          },
          {
            id:351,
            title: "Section Heading",
            headlineTitle: "Section Heading",
            url:"/guide_doc/section-heading",
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
          {
            id:353,
            title: "Snackbar",
            headlineTitle: "Snackbar",
            url:"/guide_doc/banner",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "banner-content.tsx",
          },
          {
            id:354,
            title: "Toast",
            headlineTitle: "Toast",
            url:"/guide_doc/toast",
            headlineCopy: "Toast는 짧은 메시지나 알림을 표시하는 데 사용되는 웹이나 태블릿용 구성 요소입니다. Toast는 종종 양식 제출이나 작업 완료와 같은 성공 또는 실패한 작업을 확인합니다. 일반적으로 자동으로 사라지기 전에 몇 초 동안 표시되지만 해제할 때까지 남아 있을 수 있습니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "toast-content.tsx",
          },
          {
            id:355,
            title: "Tooltip",
            headlineTitle: "Tooltip",
            url:"/guide_doc/tooltip",
            headlineCopy: "Tooltip은 새로운 콘텐츠와 기능을 소개하거나 간단한 단계별 안내를 제공하는 데 사용되는 간단하고 유익한 메시지입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "tooltip-content.tsx",
          }
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
          {
            id:372,
            title: "Bottom Bar",
            headlineTitle: "Bottom Bar",
            url:"/guide_doc/bottom-bar",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "bottom-bar-content.tsx",
          },
          {
            id:373,
            title: "Link",
            headlineTitle: "Link",
            url:"/guide_doc/link",
            headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "link-content.tsx",
          },
          {
            id:374,
            title: "Navigation Header",
            headlineTitle: "Navigation Header",
            url:"/guide_doc/navigation-header",
            headlineCopy: "Navigation Header는 화면의 컨텍스트를 설정하고 사용자가 다양한 흐름을 쉽게 탐색할 수 있도록 하는 상단에 고정된 구성 요소입니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "navigation-header-content.tsx",
          },
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
          {
            id:378,
            title: "Segmented Control",
            headlineTitle: "Segmented Control",
            url:"/guide_doc/segmented-control",
            headlineCopy: "Segmented Control은 2개 이상의 Segment가 모인 가로형 네비게이션 요소이며 각 Segment는 버튼의 역할을 수행합니다.",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "segmented-control-content.tsx",
          }
        ]
      },
      {
        id: 38,
        title: "Data and tables",
        // children: [
        //   {
        //     id:331,
        //     title: "Checkbox",
        //     headlineTitle: "Checkbox",
        //     url: "/guide_doc/checkbox",
        //     headlineCopy: "체크박스는 사용자가 여러 개의 옵션 중 한 개 이상의 값을 선택할 수 있도록 하는 경우에 사용합니다.",
        //     thumbSrc : "/com_doc/link.svg",
        //     contentSrc : "./contents/checkbox-content.tsx",
        //     linkVkds : "https://uiux.egovframe.go.kr/guide/component/component_04_07.html",
        //     linkShadcn : "https://uiux.egovframe.go.kr/guide/component/component_04_07.html" 
        //   },
        //   {
        //     id:332,
        //     title: "Date Picker",
        //     headlineTitle: "Date Picker",
        //     url:"/guide_doc/datepicker",
        //     headlineCopy: "범위와 사전 설정이 포함된 날짜 선택기 구성요소입니다.",
        //     thumbSrc : "/com_doc/button.svg",
        //     contentSrc : "./contents/datepicker.tsx",
        //   }
        // ]
      },
    ] /* Components END */
  },
  {
    id:4,
    title:"Pattern",
    children:[
      {
        id:41,
        title:"Mobile Page sample",
        children: [
          {
            id:411,
            title: "Mobile Sample 1",
            headlineTitle: "Mobile Sample 1",
            url:"/guide_doc/sample-page-1",
            headlineCopy: "ui 컴포넌트 사용예시 및 테스트 용",
            thumbSrc : "/com_doc/button.svg",
            contentSrc : "sample-page-1.tsx",
          }
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