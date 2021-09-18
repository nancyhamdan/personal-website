<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">
<xsl:template match="/projects/project[@id='1']">
    <div class="subcontent-grid" id="project1">
        <div class="flexbox art-left" id="project1-art">
            <div class="polaroid" id="project1-pol">
                <img>
                    <xsl:attribute name="src">
                         <xsl:value-of select="img"/>
                    </xsl:attribute>
                </img>
                <div class="title">
                    <xsl:value-of select="title" />
                </div>
            </div>
        </div>
        <div class="flexbox text-right" id="project1-text">
            <div class="text-holder" id="project1-text-holder">
                <p>
                    <xsl:value-of select="desc" />
                </p>
            </div>
        </div>
    </div>
</xsl:template>
<xsl:template match="/projects/project[@id='2']">
    <div class="subcontent-grid dark-bg" id="project2">
        <div class="flexbox text-left" id="project2-text">
            <div class="text-holder" id="project2-text-holder">
                <p>
                    <xsl:value-of select="desc" />
                </p>
            </div>
        </div>
        <div class="flexbox art-right" id="project2-art">
            <div class="polaroid" id="project2-pol">
                <img>
                    <xsl:attribute name="src">
                         <xsl:value-of select="img"/>
                    </xsl:attribute>
                </img>
                <div class="title">
                    <xsl:value-of select="title" />
                </div>
            </div>
        </div>
    </div>
</xsl:template>
<xsl:template match="/projects/project[@id='3']">
    <div class="subcontent-grid" id="project3">
        <div class="flexbox art-left" id="project3-art">
            <div class="polaroid" id="project3-pol">
                <img>
                    <xsl:attribute name="src">
                         <xsl:value-of select="img"/>
                    </xsl:attribute>
                </img>
                <div class="title">
                    <xsl:value-of select="title" />
                </div>
            </div>
        </div>
        <div class="flexbox text-right" id="project3-text">
            <div class="text-holder" id="project3-text-holder">
                <p>
                    <xsl:value-of select="desc" />
                </p>
            </div>
        </div>
    </div>
</xsl:template>
<xsl:template match="/projects/project[@id='4']">
    <div class="subcontent-grid dark-bg" id="project4">
        <div class="flexbox text-left" id="project4-text">
            <div class="text-holder" id="project4-text-holder">
                <p>
                    <xsl:value-of select="desc" />
                </p>
            </div>
        </div>
        <div class="flexbox art-right" id="project4-art">
            <div class="polaroid" id="project4-pol">
                <img>
                    <xsl:attribute name="src">
                         <xsl:value-of select="img"/>
                    </xsl:attribute>
                </img>
                <div class="title">
                    <xsl:value-of select="title" />
                </div>
            </div>
        </div>
    </div>
</xsl:template>
<xsl:template match="/projects/project[@id='5']">
    <div class="subcontent-grid" id="project5">
        <div class="flexbox art-left" id="project5-art">
            <div class="polaroid" id="project5-pol">
                <img>
                    <xsl:attribute name="src">
                         <xsl:value-of select="img"/>
                    </xsl:attribute>
                </img>
                <div class="title">
                    <xsl:value-of select="title" />
                </div>
            </div>
        </div>
        <div class="flexbox text-right" id="project5-text">
            <div class="text-holder" id="project5-text-holder">
                <p>
                    <xsl:value-of select="desc" />
                </p>
            </div>
        </div>
    </div>
</xsl:template>
<xsl:template match="/projects/project[@id='6']">
    <div class="subcontent-grid dark-bg" id="project6">
        <div class="flexbox text-left" id="project6-text">
            <div class="text-holder" id="project6-text-holder">
                <p>
                    <xsl:value-of select="desc" />
                </p>
            </div>
        </div>
        <div class="flexbox art-right" id="project6-art">
            <div class="polaroid" id="project6-pol">
                <img>
                    <xsl:attribute name="src">
                         <xsl:value-of select="img"/>
                    </xsl:attribute>
                </img>
                <div class="title">
                    <xsl:value-of select="title" />
                </div>
            </div>
        </div>
    </div>
</xsl:template>
</xsl:stylesheet>