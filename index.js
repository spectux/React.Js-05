const Box = ({bgColor, title, subtitle}) => (
  <div
    style={{
      backgroundColor: bgColor,
      color: '#ffffff',
      padding: '16px',
      borderRadius: '8px',
      textAlign: 'center',
      marginBottom: '16px',
    }}
  >
    <h2 style={{fontFamily: 'Bree Serif', marginBottom: '8px'}}>{title}</h2>
    <p style={{fontFamily: 'Roboto', margin: 0}}>{subtitle}</p>
  </div>
)

const element = (
  <div
    style={{backgroundColor: '#0f172a', minHeight: '100vh', padding: '24px'}}
  >
    <h1
      style={{
        fontFamily: 'Bree Serif',
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: '24px',
      }}
    >
      Boxes
    </h1>
    <Box bgColor='#fbbf24' title='Box 1' subtitle='This is box 1' />
    <Box bgColor='#38bdf8' title='Box 2' subtitle='This is box 2' />
    <Box bgColor='#ec4899' title='Box 3' subtitle='This is box 3' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
