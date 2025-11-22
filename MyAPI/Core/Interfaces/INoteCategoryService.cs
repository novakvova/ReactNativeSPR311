using Core.Models.NoteCategory;

namespace Core.Interfaces;

public interface INoteCategoryService
{
    Task<NoteCategoryItemModel> Create(NoteCategoryCreateModel model);
}
