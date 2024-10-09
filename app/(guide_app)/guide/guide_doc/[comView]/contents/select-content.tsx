"use client"

import React, { CSSProperties } from 'react';
import Select from 'react-select';

import {
  ColourOption,
  colourOptions,
  FlavourOption,
  GroupedOption,
  groupedOptions,
} from '../../../../../data/select_dummy_data';

export default function ComViewContent() {
  
const formatGroupLabel = (data: GroupedOption) => (
  
  <div className={'select-group'}>
    <span>{data.label}</span>
    <span className={'select-grouped-badge'}>{data.options.length}</span>
  </div>
);

  return (
    <div>

    <span className="view-block-title-wrap">
      <h4 className="view-block-title">기본사용예시</h4>
    </span>

    <div className="component-view-wrap" style={{overflow:"visible"}}>
      <div className="inner-view">
        <div className="example-view">

          <span className="example-column">

          <Select<ColourOption | FlavourOption, false, GroupedOption>
            defaultValue={colourOptions[1]}
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            className={'select'}
          />
            
          </span>

        </div>  
      </div>
    </div>

    </div>
  );
}