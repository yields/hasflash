
/**
 * plugins.
 */

var plugin = navigator.plugins.length
  && navigator.plugins['Shockwave Flash'];

/**
 * mimes.
 */

var mime = navigator.mimeTypes.length
  && navigator.mimeTypes['application/x-shockwave-flash'];

/**
 * Wether or not the browser has
 * flash plugin enabled.
 *
 * @return {bool}
 */

module.exports = function(){
  if (plugin) return true;
  if (mime && mime.enabledPlugin) return true;
  try{ new ActiveXObject('ShockwaveFlash.ShockwaveFlash'); return true; } catch(e){}
  return false;
};
