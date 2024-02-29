const RootPage = () => {
  return (
    <div>
      Root Page (Protected)
      {/* Meaning this should be protected by authentication. 
      Only logged in users should see this page*/}
    </div>
  )
}

export default RootPage