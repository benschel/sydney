class User < ActiveRecord::Base
    has_many :mentions
end
