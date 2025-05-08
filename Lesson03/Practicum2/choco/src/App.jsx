const WideFrame = (props) =>  {
  return (
    <div
        style={{
          width: props.width + 'px',
          height: props.height + 'px',
          border: '45px ridge saddlebrown',
        }}
    >
      <img src='/vite.svg'
           style={{
            width: '100%',
            height: '100%'}}
      />
    </div>
  );
};


export default function App(){
  return (
    <WideFrame
        width={prompt('Укажите ширину картины')}
        height={prompt('Укажите высоту картины')} />
  );
}
