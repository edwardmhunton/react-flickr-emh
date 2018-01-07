
class FlickrApi {

  static getImage(query, key) {
    let q = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&format=json&per_page=10&nojsoncallback=1&safe_search=3&extras=url_s&text='+query;
    return fetch(q).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default FlickrApi;
