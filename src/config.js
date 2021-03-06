export const WEATHER_STR = "weather";
export const TRANSLATE_STR = "translate";

export const METRIC_STR = "Metric";
export const IMPERIAL_STR = "Imperial";

/**
 * 'accuWeatherAPI' is the URL for AccuWeather API requests.
 * @const {String}
 */
export const ACCUWEATHER_API = "https://dataservice.accuweather.com/";

/**
 * 'accuWeatherKey' is the API key for AccuWeather API
 * If this project was for the general public, this API key would be stored on my own server
 * and that server would act as a proxy for all API requests in order to hide API key from
 * the public.
 * @const {String}
 */
export const ACCUWEATHER_KEY = "BGeX6oJdTs1DM8FFmqB7tQRCyq04FmFg";

/**
 * 'accuWeatherIcons' is the URL where weather icon images are located.
 * @const {String}
 */
export const ACCUWEATHER_ICONS =
  "https://developer.accuweather.com/sites/default/files/";

export const MY_MEMORY_API = "https://api.mymemory.translated.net/get";

export const TRANSLATE_FROM = "en";
export const TRANSLATE_TO = "ko";

/**
 * 'geoOptions' is an object that holds overrides to the default Geolocation config settings.
 * @const {Object}
 */
export const geoOptions = {
  enableHighAccuracy: true,
  timeout: 7000, // 7 seconds to retrieve location or call error handler
};
