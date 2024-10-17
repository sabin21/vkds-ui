"use client"

// import Image from 'next/image'
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import TileGroup from '@/components/ui/tile/tileGroup';
import { IconArrowBack, IconHeart, IconMagnifier, IconCheckmark } from '@/components/icons/icons_app_ui';
import { Globe, Compass, HeartHandshake, Layers, ChevronRight } from 'lucide-react';

export default function ComViewContent() {

  const tileOptions = [
    { 
      value: 'option1', 
      content: (
        <>
          <div className="tile-top">
            <span className='leading-item'>
              <i className='icon material material-heart'></i>
            </span>
            <span className='trailing-item'>
              <button className='tile-radio'></button>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div> 
        </>
      )
    },
    { 
      value: 'option2', 
      content: (
        <>
          <div className="tile-top">
            <span className='leading-item'>
              <i className='icon material material-heart'></i>
            </span>
            <span className='trailing-item'>
              <button className='tile-radio'></button>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div> 
        </>
      )
    },
    { 
      value: 'option3', 
      content: (
        <>
          <div className="tile-top">
            <span className='leading-item'>
              <i className='icon material material-heart'></i>
            </span>
            <span className='trailing-item'>
              <button className='tile-radio'></button>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div> 
        </>
      )
    },
    { 
      value: 'option4', 
      content: (
        <>
          <div className="tile-top">
            <span className='leading-item'>
              <i className='icon material material-heart'></i>
            </span>
            <span className='trailing-item'>
              <button className='tile-radio'></button>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div> 
        </>
      )
    }
  ];

  const tileOptions2 = [
    { 
      value: 'option1', 
      content: (
        <>
          <div className="tile-top">
            <span className='leading-item'>
              <i className='icon material material-heart'></i>
            </span>
            <span className='trailing-item'>
              <button className='tile-checkbox'><IconCheckmark /></button>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div> 
        </>
      )
    },
    { 
      value: 'option2', 
      content: (
        <>
          <div className="tile-top">
            <span className='leading-item'>
              <i className='icon material material-heart'></i>
            </span>
            <span className='trailing-item'>
              <button className='tile-checkbox'><IconCheckmark /></button>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div> 
        </>
      )
    },
    { 
      value: 'option3', 
      content: (
        <>
          <div className="tile-top">
            <span className='leading-item'>
              <i className='icon material material-heart'></i>
            </span>
            <span className='trailing-item'>
              <button className='tile-checkbox'><IconCheckmark /></button>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div> 
        </>
      )
    },
    { 
      value: 'option4', 
      content: (
        <>
          <div className="tile-top">
            <span className='leading-item'>
              <i className='icon material material-heart'></i>
            </span>
            <span className='trailing-item'>
              <button className='tile-checkbox'><IconCheckmark /></button>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div> 
        </>
      )
    }
  ];

  const handleSelectionChange = (selectedValues: string[]) => {
    console.log('선택된 옵션들:', selectedValues);
  };

   
  return (
    <div className='content-wrap'>
    
    <div className="section-block">
      <h3>구성 예시</h3>
    </div>

    <div className="section-block level2">
      <h4>Leading, Trailing Content</h4>
      <div className="tile-list">
        <div className="tile-list-inner">

          <div className="tile">
            <div className="tile-top">
              <span className='leading-item'>
                <div className='icon'> <Compass /> </div>
              </span>
              <span className='trailing-item'>
                <div className="icon chevron"> <ChevronRight /> </div>
              </span>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile">
            <div className="tile-top">
              <span className='leading-item'>
              <div className='icon'> <Globe /> </div>
              </span>
              <span className='trailing-item'>
                
              </span>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile">
            <div className="tile-top">
              <span className='leading-item'>
                <span className='text'>레이블 텍스트</span>
              </span>
              <span className='trailing-item'>
                <div className='icon'> <Globe /> </div>
              </span>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile">
            <div className="tile-top">
              {/* <span className='leading-item'>
                
              </span> */}
              <span className='trailing-item'>
                <span className='text'>레이블 텍스트</span>
              </span>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile">
            <div className="tile-top">
              <span className='leading-item'>
                <span className='text'>레이블 텍스트</span>
              </span>
              <span className='trailing-item'>
                <button className='tile-checkbox'><IconCheckmark /></button>
              </span>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile">
            <div className="tile-top">
              <span className='leading-item'>
                <span className='text'>레이블 텍스트</span>
              </span>
              <span className='trailing-item'>
                <button className='tile-radio'></button>
              </span>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile">
            <div className="tile-top">
              <span className='leading-item'>
                <span className='text'>레이블 텍스트</span>
              </span>
              <span className='trailing-item'>
                <div className="icon chevron"> <ChevronRight /> </div>
              </span>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile">
            <div className="tile-top">
              <span className='leading-item'>
                <div className='artwork'>
                  <img src="/img/emoji/teddy-bear.png" alt="" />
                </div>
              </span>
              <span className='trailing-item'>
                <div className="icon chevron"> <ChevronRight /> </div>
              </span>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="section-block level2">
      <h4>Action Tile</h4>
      <div className="tile-list">
        <div className="tile-list-inner">

          <div className="tile action-tile">
            <div className="tile-top">
              <div className="artwork">
                <img src="/img/emoji/grinning-cat-with-smiling-eyes.png" alt="" />
              </div>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile action-tile">
            <div className="tile-top">
              <div className="artwork">
                <img src="/img/emoji/party-popper.png" alt="" />
              </div>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile action-tile">
            <div className="tile-top">
              <div className="artwork">
                <img src="/img/emoji/teddy-bear.png" alt="" />
              </div>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

          <div className="tile action-tile">
            <div className="tile-top">
              <div className="artwork">
                <img src="/img/emoji/bullseye.png" alt="" />
              </div>
            </div>
            <div className="tile-bottom">
              <span className='card-text-block'>
                <h4>타일카드 레이블</h4>
                <p className='desc'>타일카드 상세정보 텍스트</p>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/*--------------*/}

    <div className="section-block">
      <h3>항목 선택</h3>
    </div>

    <div className="section-block level2">
      <h4>단일 항목 선택 유형</h4>
      <div className="tile-list">
        <TileGroup 
          options={tileOptions} 
          onSelectionChange={handleSelectionChange} 
          multiSelect={false}
          selectable={true}
        />
      </div>
    </div>

    <div className="section-block level2">
      <h4>다중 항목 선택 유형</h4>
      <div className="tile-list">
        <TileGroup 
          options={tileOptions2} 
          onSelectionChange={handleSelectionChange} 
          multiSelect={true}
          maxSelections={3}
          selectable={true}
        />
      </div>
    </div>

    

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Leading content</h4>
    </span>

    <span className="flex w-full mb-24 gap-6" style={{alignItems:"start"}}>

      <div className="tile">
        <div className="tile-top">
          {/* <span className='leading-item'>
            <i className='icon material material-heart'></i>
          </span> */}
          <span className='trailing-item'>
            <Checkbox />
          </span>
        </div>
        <div className="tile-bottom">
          <span className='card-text-block sm'>
            <h4>타일카드 레이블</h4>
            <p className='desc'>타일카드 상세정보 텍스트</p>
          </span>
        </div>
      </div>

      <div className="tile">
        <div className="tile-top">
          <span className='leading-item'>
            <i className='icon sm material material-heart'></i>
          </span>
          <span className='trailing-item'>
          <Checkbox />
          </span>
        </div>
        <div className="tile-bottom">
          <span className='card-text-block sm'>
            <h4>타일카드 레이블</h4>
            <p className='desc'>타일카드 상세정보 텍스트</p>
          </span>
        </div>
      </div>

      <div className="tile">
        <div className="tile-top">
          <span className='leading-item'>
            <i className='icon material material-heart'></i>
          </span>
          <span className='trailing-item'>
            <Checkbox />
          </span>
        </div>
        <div className="tile-bottom">
          <span className='card-text-block sm'>
            <h4>타일카드 레이블</h4>
            <p className='desc'>타일카드 상세정보 텍스트</p>
          </span>
        </div>
      </div>

      <div className="tile">
        <div className="tile-top">
          <span className='leading-item'>
            <div className="avatar regular">
              <div className="avatar-inner"></div>
              <div className="indicator-bottom" id="sns-naver"></div>
            </div>
          </span>
          <span className='trailing-item'>
            <Checkbox />
          </span>
        </div>
        <div className="tile-bottom">
          <span className='card-text-block sm'>
            <h4>타일카드 레이블</h4>
            <p className='desc'>타일카드 상세정보 텍스트</p>
          </span>
        </div>
      </div>

      <div className="tile">
        <div className="tile-top">
          <span className='leading-item'>
            <span className='text'>레이블</span>
          </span>
          <span className='trailing-item'>
            <Checkbox />
          </span>
        </div>
        <div className="tile-bottom">
          <span className='card-text-block sm'>
            <h4>타일카드 레이블</h4>
            <p className='desc'>타일카드 상세정보 텍스트</p>
          </span>
        </div>
      </div>

    </span>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">Trailing content</h4>
      <p>Trailing 영역에는 텍스트레이블, 아이콘, Checkbox, Switch 요소등을 사용 할 수 있습니다.</p>
    </span>

    <span className="flex w-full mb-24 gap-6" style={{alignItems:"start"}}>
      
      <span className="example-inner-wrap">
        <div className="tile">
          <div className="tile-top">
            <span className='trailing-item'>
              <span className='text'>레이블</span>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block sm'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div>
        </div>
        <span className="example-inner-block">
          텍스트 레이블
        </span>
      </span>

      <span className="example-inner-wrap">
        <div className="tile">
          <div className="tile-top">
            <span className='trailing-item'>
            <i className='icon material material-link'></i>
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block sm'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div>
        </div>
        <span className="example-inner-block">
          Icon
        </span>
      </span>
      
      

      <span className="example-inner-wrap">
        <div className="tile">
          <div className="tile-top">
            <span className='trailing-item'>
              
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block sm'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div>
        </div>
        <span className="example-inner-block">
          Radio
        </span>
      </span>

      <span className="example-inner-wrap">
        <div className="tile">
          <div className="tile-top">
            <span className='trailing-item'>
              <Switch size={'lg'} />
            </span>
          </div>
          <div className="tile-bottom">
            <span className='card-text-block sm'>
              <h4>타일카드 레이블</h4>
              <p className='desc'>타일카드 상세정보 텍스트</p>
            </span>
          </div>
        </div>
        <span className="example-inner-block">
          Switch
        </span>
      </span>

    </span>

    </div>
  );
}