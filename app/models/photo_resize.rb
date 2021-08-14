 class PhotoResize < ApplicationRecord
#     has_one_attached :photo
#     validate :image_format
#     def resize_image
#         resized_image = MiniMagick::Image.read(photo.download)
#         resized_image = resized_image.resize "400x400"
#         v_filename = photo.filename
#         v_content_type = photo.content_type
#         photo.purge
#         photo.attach(io: File.open(resized_image.path), filename:  v_filename, content_type: v_content_type)
#     end

#     private
#     def image_format
#      return unless photo.attached?
#      if photo.blob.content_type.start_with? 'image/'
#        if photo.blob.byte_size > 10.megabytes
#          errors.add(:photo, 'size needs to be less than 10MB')
#          photo.purge
#        else
#          resize_image
#        end
#       else
#         photo.purge
#         errors.add(:photo, 'needs to be an image')
#       end
     end