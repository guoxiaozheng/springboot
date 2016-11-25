package cn.sumpay.accountant;

import javax.sql.DataSource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

import com.alibaba.druid.pool.DruidDataSource;

@Configuration
@MapperScan(basePackages = "cn.sumpay.accountant.dao")
@ConfigurationProperties(prefix = "spring.datasource")
public class MybatisConfig {
	
	Log log = LogFactory.getLog(this.getClass());
	private String url;
	private String username;
	private String password;
	

	
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Bean
	public SqlSessionFactory sqlSessionFactory(DataSource dataSource)
			throws Exception {
		final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		sessionFactory.setDataSource(dataSource);
		PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
		sessionFactory.setMapperLocations(resolver
				.getResources("classpath*:META-INF/sqlmap/*.xml"));
		return sessionFactory.getObject();
	}
	
	@Bean
	public DataSource dataSource() {
		DruidDataSource dds = new DruidDataSource();
		dds.setUrl(url);
		dds.setUsername(username);
		dds.setPassword(password);
		return dds;
	}
}
