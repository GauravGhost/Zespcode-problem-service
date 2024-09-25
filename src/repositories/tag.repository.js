const InternalServerError = require("../errors/internal.server.error");
const { Tag } = require("../models");


class TagRepository {
    async createTag(tagData) {
        try {
            const tag = await Tag.create(tagData);
            return tag;

        } catch (error) {

            throw new InternalServerError("Database Error while creating: " + error.message);
        }
    }

    async createManyTag(tagsData) {
        try {
            const tag = await Tag.insertMany(tagsData);
            return tag;
        } catch (error) {

            throw new InternalServerError("Database Error while creating: " + error.message);
        }
    }

    async getAllTags() {
        try {
            const tags = await Tag.find();
            return tags;
        } catch (error) {
            throw new InternalServerError("Database Error while fetching: " + error.message);
        }
    }

    async getTag(id) {
        try {
            const tag = await Tag.findById(id);
            return tag;
        } catch (error) {
            throw new InternalServerError("Database Error while fetching: " + error.message);
        }
    }

    async getTagBySlug(slug){
        try {
           const tag = await Tag.findOne({slug: slug});
        //    console.log("tagid", tag._id)
           return tag; 
        } catch (error) {
            throw new InternalServerError("Database Error while fetching: " + error.message);
        }
    }

    async updateTag(id, updatedData) {
        try {
            const newTag = await Tag.findByIdAndUpdate(id, updatedData);
            return newTag;
        } catch (error) {
            throw new InternalServerError("Database Error while updating: " + error.message);
        }
    }

    async deleteTag(id) {
        try {
            const tag = await Tag.findByIdAndDelete(id);
            return tag;
        } catch (error) {
            throw new InternalServerError("Database Error while deleting: " + error.message);
        }
    }

    async deleteMany() {
        try {
            const tag = await Tag.deleteMany({});
            return tag;
        } catch (error) {
            throw new InternalServerError("Database Error while deleting: " + error.message);
        }
    }
}


module.exports = TagRepository;