
export default function Layout({children}) {
  return (
    <html>
      <body style={{margin:0,fontFamily:"system-ui",display:"flex",background:"#0b1220",color:"#fff"}}>
        <aside style={{width:240,padding:20,background:"#111827",height:"100vh"}}>
          <h2>Clinic SaaS</h2>
          <p>Live Desk</p>
          <p>Quick Book</p>
          <p>Pricing</p>
          <p>Landing</p>
        </aside>
        <main style={{flex:1,padding:20}}>{children}</main>
      </body>
    </html>
  )
}
