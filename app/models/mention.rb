class Mention < ActiveRecord::Base
  belongs_to :user, counter_cache: true, touch: true
end
