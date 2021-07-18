class Property < ApplicationRecord
    # mount_uploader :photo, PhotoUploader
    has_one_attached :photo
    # has_one_attached :photo_cache
    
    belongs_to :account

    scope :latest, -> { order created_at: :desc }
    # def resize_image
    #     photo = photo.resize "400x400"
    #     v_filename = photo.filename
    #     v_content_type = photo.content_type
    #     photo.purge
    #     photo.attach(io: File.open(resized_image.path), filename:  v_filename, content_type: v_content_type)
    # end

    # private
    # def image_format
    #  return unless photo.attached?
    #  if photo.blob.content_type.start_with? 'image/'
    #    if photo.blob.byte_size > 10.megabytes
    #      errors.add(:photo, 'size needs to be less than 10MB')
    #      photo.purge
    #    else
    #      resize_image
    #    end
    #   else
    #     photo.purge
    #     errors.add(:photo, 'needs to be an image')
    #   end
    # end
end
