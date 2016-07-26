class User < ActiveRecord::Base
  has_many :mentions

  def get_filtered_mentions
    return Mention.where(
      :created_at => Time.now.beginning_of_week..Time.now.end_of_week,
      :user_id => self.id)
      .order('created_at DESC')
      .limit(12)
  end

  def get_user_most_mentions
    return User.where.not(mentions_count: nil).order('mentions_count DESC, updated_at DESC').first.id
  end
end
