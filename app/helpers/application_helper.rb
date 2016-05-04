module ApplicationHelper
  def user_photo_path(photo)
    return image_path('user-photos/' + photo)
  end
end
