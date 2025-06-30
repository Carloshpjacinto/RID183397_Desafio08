import regionRepository from "../repositories/region.repository.js";

async function createRegionService(newRegion) {
  const createdRegion = await regionRepository.createRegionRepository(
    newRegion
  );

  if (!createdRegion) throw new Error("Error creating Region");

  return createdRegion;
}

async function findAllRegionService() {
  const regions = await regionRepository.findAllRegionsRepository();
  return regions;
}

export default {
  createRegionService,
  findAllRegionService,
};
