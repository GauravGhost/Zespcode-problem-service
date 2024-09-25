const TagRepository = require('../repositories/tag.repository');
const path = require('node:path');
const fs = require('node:fs');
async function tagSeeding() {
    const tagRepository = new TagRepository();
    const tagData = JSON.parse(fs.readFileSync(path.join(__dirname, "../utils/seed-data/tagData.json")));
    await tagRepository.deleteMany();
    console.log("All Tag Deleted");
    const response = await tagRepository.createManyTag(tagData);
    console.log("Tag Data seeded to the database");
    console.log(response);
}


module.exports = {
    tagSeeding
}