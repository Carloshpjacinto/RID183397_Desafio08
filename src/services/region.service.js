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

async function findRegionByCscService(country, state, category) {
  const region = await regionRepository.findRegionByCscRepository(
    country,
    state,
    category
  );

  return region;
}

async function findCountryService(country) {
  const st = await regionRepository.findCountryRepository(country);
  return st;
}

async function findRegionByStateService(state) {
  const st = await regionRepository.findRegionByStateRepository(state);
  return st;
}

async function findCategoryService(category) {
  const ct = await regionRepository.findCategoryRepository(category);
  return ct;
}

async function updateRegionService(updatedRegion, regionId) {
  const region = await regionRepository.findRegionByIdRepository(regionId);
  if (!region) throw new Error("Region not found");
  const response = await regionRepository.updateRegionRepository(
    updatedRegion,
    regionId
  );
  return response;
}

async function deleteRegionService(regionId) {
  const region = await regionRepository.findRegionByIdRepository(regionId);
  if (!region) throw new Error("Region not found");
  const response = await regionRepository.deleteRegionRepository(regionId);
  return response;
}

export default {
  createRegionService,
  findAllRegionService,
  findRegionByCscService,
  findCountryService,
  findRegionByStateService,
  findCategoryService,
  updateRegionService,
  deleteRegionService,
};
