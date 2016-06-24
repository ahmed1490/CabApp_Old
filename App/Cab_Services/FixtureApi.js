export default {

  getCity: (city) => {
    const responseData = {
      boise: require('../Fixtures/boise.json'),
      toronto: require('../Fixtures/toronto.json')
    }

    return {
      ok: true,
      data: responseData[city.toLowerCase()]
    }
  }
}
