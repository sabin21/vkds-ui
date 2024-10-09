export default function ComViewHead(props: any) {  
  return (
    <div className="block-head-wrap">
      <div className="block-head-title">
        <h2>{props.componentHeadline}</h2>
        <span className="headline-copy">
          {props.headlineCopy}
        </span>
      </div>
    </div>
  );
}