using AutoMapper;
using Core.Interfaces;
using Core.Models.NoteCategory;
using Domain;
using Domain.Entities;

namespace Core.Services;

public class NoteCategoryService(IAuthService authService, 
    AppDbContext appDbContext,
    IImageService imageService,
    IMapper mapper) : INoteCategoryService
{
    public async Task<NoteCategoryItemModel> Create(NoteCategoryCreateModel model)
    {
        var userId = await authService.GetUserIdAsync();
        var entity = mapper.Map<NoteCategoryEntity>(model);
        entity.UserId = userId;
        if (model.Image is not null)
        {
            entity.Image = await imageService.SaveImageAsync(model.Image);
        }
        appDbContext.NoteCategories.Add(entity);
        await appDbContext.SaveChangesAsync();

        var result = mapper.Map<NoteCategoryItemModel>(entity);
        return result;
    }
}
