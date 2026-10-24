/**
 * Maps a given Checkout ID to the corresponding product bottle image.
 * Images are located in /AlfredMD_Product_img/ (public directory).
 * 
 * @param {string|number} id - The Checkout ID
 * @returns {string|null} - Path to the image or null if not found
 */
export const getImageById = (id) => {
  const getUrl = (filename) => {
    return `${process.env.PUBLIC_URL || ''}/AlfredMD_Product_img/${filename.replace(/ /g, '%20').replace(/\+/g, '%2B')}`;
  };

  if (!id) return getUrl("blank.png");
  const pid = parseInt(id, 10);

  const ranges = (min, max) => pid >= min && pid <= max;

  // Hormone Optimization
  if (pid === 61) return getUrl("trt.png");
  if (pid === 62) return getUrl("enclomiphene.png");
  if ([63, 64, 65, 66].includes(pid)) return getUrl("sermorelin.png");

  // Weight & Metabolic
  if ([2, 13, 35, 41].includes(pid)) return getUrl("semaglutide.png");
  if ([7, 51, 22, 28].includes(pid)) return getUrl("tirzepatide.png");
  if ([73, 67, 74, 75].includes(pid)) return getUrl("metformin.png");

  // Longevity
  if ([91, 92, 93, 94].includes(pid)) return getUrl("nad.png");
  if ([76, 77, 78, 79].includes(pid)) return getUrl("glutathione.png");
  if ([87, 88, 89, 90].includes(pid)) return getUrl("b12.png");

  // Sexual Wellness
  if (ranges(118, 137)) return getUrl("sild_transparent.png");
  if (ranges(182, 201) || [202, 203, 204, 205].includes(pid)) return getUrl("tadalafil.png");
  if ([213, 214, 215].includes(pid)) return getUrl("premature-ejaculation.png");
  if ([95, 96, 97, 98].includes(pid)) return getUrl("pt-141.png");

  // Treatments / Hair
  if ([207, 208, 209].includes(pid)) return getUrl("finasteride.png");

  return getUrl("blank.png");
};
