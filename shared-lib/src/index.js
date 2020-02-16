const lazyLoadedSharedFeature = () => import('./lazyLoadedSharedFeature')

function sharedFeature() {
  console.log('I am shared feature')
  console.warn('2 seconds after network should fetch additional chunk')

  setTimeout(async () => {
    console.warn('lazy loaded shared feature called, network should fetch additional chunk')
    const { lazySharedFeature } = await lazyLoadedSharedFeature()
    lazySharedFeature()
  },2000)

}

export {
  sharedFeature
}
